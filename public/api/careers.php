<?php
/**
 * Vevra Packaging - Careers Application Email Backend
 * 
 * Handles career job applications:
 * 1. Attaches candidate resume as RFC-compliant MIME attachment (guaranteed complete via chunked socket streaming)
 * 2. Saves candidate resume locally for instant 1-click web download link
 * 3. Sends applicant profile & resume to Admin (Careers@vevrapackaging.com)
 * 4. Sends acknowledgement email to Applicant (from no-reply@vevrapackaging.com)
 * 5. Logs every submission for audit & zero data loss
 */

error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

// CORS Headers
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['status' => 'ok']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed. POST is required.']);
    exit;
}

// SMTP & Email Configuration
const SMTP_CONFIG = [
    'host'     => 'mail.vevrapackaging.com',
    'port'     => 465,
    'user'     => 'no-reply@vevrapackaging.com',
    'pass'     => 'no-vevra@2026',
    'from'     => 'no-reply@vevrapackaging.com',
    'fromName' => 'Vevra Packaging Careers Desk',
    'adminTo'  => 'Careers@vevrapackaging.com',
];

// Extract input data (supports multipart/form-data and JSON)
$name         = trim($_POST['name'] ?? '');
$email        = trim($_POST['email'] ?? '');
$phone        = trim($_POST['phone'] ?? '');
$position     = trim($_POST['position'] ?? '');
$coverPage    = trim($_POST['coverPage'] ?? $_POST['coverLetter'] ?? $_POST['message'] ?? '');
$appRef       = trim($_POST['appRef'] ?? ('APP-VVR-' . rand(1000, 9999)));
$resumeBase64 = trim($_POST['resumeBase64'] ?? '');
$resumeName   = trim($_POST['resumeName'] ?? '');

// If payload sent as raw JSON
if (empty($name) && empty($email)) {
    $raw = file_get_contents('php://input');
    if (!empty($raw)) {
        $json = json_decode($raw, true);
        if (is_array($json)) {
            $name         = trim($json['name'] ?? '');
            $email        = trim($json['email'] ?? '');
            $phone        = trim($json['phone'] ?? '');
            $position     = trim($json['position'] ?? '');
            $coverPage    = trim($json['coverPage'] ?? $json['coverLetter'] ?? $json['message'] ?? '');
            $appRef       = trim($json['appRef'] ?? $appRef);
            $resumeBase64 = trim($json['resumeBase64'] ?? $resumeBase64);
            $resumeName   = trim($json['resumeName'] ?? $resumeName);
        }
    }
}

// Validation
$errors = [];
if (empty($name)) {
    $errors['name'] = 'Full Name is required.';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'A valid email address is required.';
}
if (empty($position)) {
    $errors['position'] = 'Position is required.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please correct form validation errors.',
        'errors'  => $errors,
    ]);
    exit;
}

$userIp = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
$submissionTime = date('d M Y, h:i A T');

// -------------------------------------------------------------
// Handle Attached Resume File (Binary Upload + Base64 Fallback)
// -------------------------------------------------------------
$attachment = null;
$fileName = '';
$fileContent = null;
$fileType = 'application/pdf';

// 1. Check binary multipart upload
if (!empty($_FILES['resumeFile']['tmp_name']) && is_uploaded_file($_FILES['resumeFile']['tmp_name'])) {
    $fileTmp     = $_FILES['resumeFile']['tmp_name'];
    $fileName    = basename($_FILES['resumeFile']['name'] ?? 'resume.pdf');
    $fileContent = @file_get_contents($fileTmp);
    if (!empty($_FILES['resumeFile']['type'])) {
        $fileType = $_FILES['resumeFile']['type'];
    }
}

// 2. Fallback to base64 if binary upload wasn't received
if (empty($fileContent) && !empty($resumeBase64)) {
    $fileName = !empty($resumeName) ? basename($resumeName) : 'candidate_resume.pdf';
    $decoded = base64_decode($resumeBase64);
    if ($decoded !== false && strlen($decoded) > 0) {
        $fileContent = $decoded;
    }
}

// Determine MIME content type accurately
if (!empty($fileName)) {
    $ext = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    if ($ext === 'pdf') {
        $fileType = 'application/pdf';
    } elseif ($ext === 'docx') {
        $fileType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    } elseif ($ext === 'doc') {
        $fileType = 'application/msword';
    } elseif (empty($fileType)) {
        $fileType = 'application/octet-stream';
    }
}

// 3. Save Resume to Server & Build Direct 1-Click Download Link
$downloadUrl = '';
$fileSizeFormatted = '0 KB';
$cleanFileName = 'candidate_resume.pdf';

if (!empty($fileContent) && strlen($fileContent) > 0) {
    $fileSizeBytes = strlen($fileContent);
    $fileSizeFormatted = ($fileSizeBytes >= 1048576) 
        ? number_format($fileSizeBytes / 1048576, 2) . ' MB' 
        : number_format($fileSizeBytes / 1024, 1) . ' KB';

    $cleanFileName = preg_replace('/[^a-zA-Z0-9_\.-]/', '_', $fileName);
    if (empty($cleanFileName)) {
        $cleanFileName = 'candidate_resume.pdf';
    }

    $attachment = [
        'name'    => $cleanFileName,
        'type'    => $fileType,
        'content' => $fileContent,
        'size'    => $fileSizeFormatted,
    ];

    // Store in public/api/resumes/
    $storageDir = __DIR__ . '/resumes';
    if (!is_dir($storageDir)) {
        @mkdir($storageDir, 0755, true);
    }

    $storedFileName = $appRef . '_' . $cleanFileName;
    $targetFilePath = $storageDir . '/' . $storedFileName;
    @file_put_contents($targetFilePath, $fileContent);

    // Build absolute download URL
    $host = !empty($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'vevrapackaging.com';
    $downloadUrl = "https://{$host}/api/download_resume.php?file=" . urlencode($storedFileName);
}

// Logging helper
function logCareerApplication($name, $email, $phone, $position, $appRef, $attachment, $ip, $downloadUrl) {
    $logFile = __DIR__ . '/careers_submissions.log';
    $time = date('Y-m-d H:i:s');
    $entry  = "=================================================================\n";
    $entry .= "[{$time}] NEW JOB APPLICATION (Ref: {$appRef}, IP: {$ip})\n";
    $entry .= "Candidate:    {$name} | Role: {$position}\n";
    $entry .= "Email:        {$email} | Phone: {$phone}\n";
    if (!empty($attachment)) {
        $entry .= "Resume File:  {$attachment['name']} ({$attachment['size']})\n";
        $entry .= "Download URL: {$downloadUrl}\n";
    } else {
        $entry .= "Resume:       None Attached\n";
    }
    $entry .= "-----------------------------------------------------------------\n";
    @file_put_contents($logFile, $entry, FILE_APPEND | LOCK_EX);
}

function logCareerDelivery($type, $to, $method, $success) {
    $logFile = __DIR__ . '/careers_submissions.log';
    $time = date('Y-m-d H:i:s');
    $status = $success ? 'DELIVERED' : 'FAILED';
    $line = "[{$time}] [{$status}] Target: {$type} ({$to}) | Method: {$method}\n";
    @file_put_contents($logFile, $line, FILE_APPEND | LOCK_EX);
}

logCareerApplication($name, $email, $phone, $position, $appRef, $attachment, $userIp, $downloadUrl);

// -------------------------------------------------------------
// Admin Email Template (Executive Vevra Theme + Direct Download)
// -------------------------------------------------------------
$adminSubject = "New Job Application: " . htmlspecialchars($name) . " - " . htmlspecialchars($position) . " (" . $appRef . ")";

$resumeDownloadHtml = '';
if (!empty($attachment)) {
    $resumeDownloadHtml = '
    <div style="margin: 24px 0; padding: 22px 24px; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px;">
      <div style="font-size: 14px; font-weight: 700; color: #166534; margin-bottom: 6px;">
        📄 Candidate Resume Document Ready
      </div>
      <p style="margin: 0 0 16px; font-size: 13px; color: #15803D; line-height: 1.5;">
        File: <strong>' . htmlspecialchars($attachment['name']) . '</strong> (' . $attachment['size'] . ') &bull; Attached directly to this email and securely hosted on the server for 1-click download.
      </p>
      ' . (!empty($downloadUrl) ? '
      <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
        <tr>
          <td>
            <a href="' . htmlspecialchars($downloadUrl) . '" target="_blank" style="display: inline-block; background-color: #D9232A; color: #ffffff; font-weight: 700; font-size: 13px; text-decoration: none; padding: 12px 28px; border-radius: 6px; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(217, 35, 42, 0.25);">
              📥 Click to Download Resume (' . htmlspecialchars($attachment['name']) . ')
            </a>
          </td>
        </tr>
      </table>
      <div style="font-size: 11px; color: #64748B;">
        Direct link: <a href="' . htmlspecialchars($downloadUrl) . '" style="color: #0284C7; word-break: break-all; font-weight: 600;">' . htmlspecialchars($downloadUrl) . '</a>
      </div>
      ' : '') . '
    </div>';
} else {
    $resumeDownloadHtml = '
    <div style="margin: 22px 0; padding: 16px 20px; background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; color: #991B1B; font-size: 13px;">
      ⚠️ No resume document was attached to this application.
    </div>';
}

$adminHtmlBody = '
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Job Application - Vevra Packaging</title>
</head>
<body style="margin: 0; padding: 0; background-color: #062141; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #062141; margin: 0; padding: 36px 12px;">
  <tr>
    <td align="center">
      <table width="620" cellpadding="0" cellspacing="0" border="0" style="max-width: 620px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.08);">
        
        <!-- Top Crimson Brand Accent -->
        <tr>
          <td height="5" style="background: linear-gradient(90deg, #D9232A 0%, #B91C1C 45%, #0B1930 100%); line-height: 5px; font-size: 5px;">&nbsp;</td>
        </tr>

        <!-- Executive Header Banner -->
        <tr>
          <td style="background: linear-gradient(180deg, #0B1930 0%, #062141 100%); padding: 34px 32px 28px; text-align: center; border-bottom: 1px solid #1E293B;">
            <div style="font-size: 22px; font-weight: 800; letter-spacing: 2.5px; color: #FFFFFF; text-transform: uppercase;">
              VEVRA <span style="color: #D9232A;">PACKAGING</span>
            </div>
            <div style="font-size: 11px; font-weight: 600; letter-spacing: 3px; color: #94A3B8; text-transform: uppercase; margin-top: 5px;">
              ENGINEERED INDUSTRIAL PACKAGING SOLUTIONS
            </div>
            <div style="margin-top: 18px;">
              <span style="display: inline-block; background-color: rgba(217, 35, 42, 0.16); color: #FCA5A5; border: 1px solid rgba(217, 35, 42, 0.35); padding: 5px 18px; border-radius: 20px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">
                TALENT ACQUISITION &bull; ' . htmlspecialchars($appRef) . '
              </span>
            </div>
          </td>
        </tr>

        <!-- Main Content -->
        <tr>
          <td style="padding: 34px 32px 24px; background-color: #ffffff;">
            
            <p style="margin: 0 0 20px; font-size: 14px; color: #475569; line-height: 1.5;">
              A new candidate application has been submitted via the <strong style="color: #062141;">vevrapackaging.com/careers</strong> portal.
            </p>

            <!-- Candidate Metadata Grid -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius: 8px; overflow: hidden; border: 1px solid #E2E8F0; margin-bottom: 22px;">
              <tr style="background-color: #F8FAFC;">
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; width: 34%; border-bottom: 1px solid #E2E8F0;">Candidate Name</td>
                <td style="padding: 12px 16px; font-size: 14px; color: #062141; font-weight: 700; border-bottom: 1px solid #E2E8F0;">' . htmlspecialchars($name) . '</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Target Position</td>
                <td style="padding: 12px 16px; font-size: 14px; color: #D9232A; font-weight: 800; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">' . htmlspecialchars($position) . '</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Email Address</td>
                <td style="padding: 12px 16px; font-size: 14px; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">
                  <a href="mailto:' . htmlspecialchars($email) . '" style="color: #D9232A; font-weight: 700; text-decoration: none;">' . htmlspecialchars($email) . '</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Phone / Mobile</td>
                <td style="padding: 12px 16px; font-size: 14px; color: #062141; font-weight: 600; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">
                  ' . (!empty($phone) ? '<a href="tel:' . htmlspecialchars(preg_replace('/[^0-9+]/', '', $phone)) . '" style="color: #062141; text-decoration: none; font-weight: 700;">' . htmlspecialchars($phone) . '</a>' : '<span style="color: #94A3B8; font-style: italic;">Not provided</span>') . '
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Resume Document</td>
                <td style="padding: 12px 16px; font-size: 14px; color: #062141; font-weight: 700; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">
                  ' . (!empty($attachment) ? htmlspecialchars($attachment['name']) . ' <span style="color: #64748B; font-weight: normal; font-size: 12px;">(' . $attachment['size'] . ')</span>' : '<span style="color: #94A3B8; font-style: italic;">None Attached</span>') . '
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; background-color: #F8FAFC;">Applied Timestamp</td>
                <td style="padding: 12px 16px; font-size: 13px; color: #475569; background-color: #ffffff;">' . htmlspecialchars($submissionTime) . '</td>
              </tr>
            </table>

            <!-- Resume Download Section (Prominent 1-Click Button) -->
            ' . $resumeDownloadHtml . '

            <!-- Cover Letter / Statement Box -->
            <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #D9232A; border-radius: 6px; padding: 18px 20px; margin-bottom: 24px;">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: #062141; text-transform: uppercase; margin-bottom: 8px;">
                Cover Letter / Candidate Statement
              </div>
              <div style="font-size: 14px; color: #1E293B; line-height: 1.65; white-space: pre-line;">' . (!empty($coverPage) ? nl2br(htmlspecialchars($coverPage)) : '<span style="color: #94A3B8; font-style: italic;">No cover letter or notes entered.</span>') . '</div>
            </div>

            <!-- Quick Action Row -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 10px;">
              <tr>
                <td align="center">
                  <a href="mailto:' . htmlspecialchars($email) . '?subject=Application%20Update:%20' . rawurlencode($position) . '%20[' . htmlspecialchars($appRef) . ']%20-%20Vevra%20Packaging" style="display: inline-block; background-color: #062141; color: #ffffff; padding: 12px 28px; border-radius: 6px; font-size: 13px; font-weight: 700; text-decoration: none; letter-spacing: 0.5px;">
                    ✉️ Reply to Candidate (' . htmlspecialchars($email) . ')
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Executive Footer -->
        <tr>
          <td style="background-color: #0B1930; padding: 26px 32px; text-align: center; border-top: 1px solid #1E293B;">
            <div style="font-size: 13px; font-weight: 700; color: #FFFFFF; letter-spacing: 1px;">
              VEVRA PACKAGING PVT. LTD.
            </div>
            <div style="font-size: 11px; color: #94A3B8; margin-top: 4px; line-height: 1.6;">
              Human Capital & Talent Acquisition Desk &bull; Quality Assured Industrial Operations<br>
              Direct Careers Desk: <a href="mailto:Careers@vevrapackaging.com" style="color: #F87171; text-decoration: none; font-weight: 600;">Careers@vevrapackaging.com</a>
            </div>
            <div style="font-size: 10px; color: #64748B; margin-top: 14px;">
              &copy; ' . date('Y') . ' Vevra Packaging Pvt. Ltd. All Rights Reserved. Confidential & Proprietary.
            </div>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>';

// -------------------------------------------------------------
// Applicant Confirmation Auto-Reply (Executive Vevra Theme)
// -------------------------------------------------------------
$userSubject = "Application Received: " . htmlspecialchars($position) . " — Vevra Packaging (" . $appRef . ")";

$userHtmlBody = '
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Application Received - Vevra Packaging</title>
</head>
<body style="margin: 0; padding: 0; background-color: #062141; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #062141; margin: 0; padding: 36px 12px;">
  <tr>
    <td align="center">
      <table width="620" cellpadding="0" cellspacing="0" border="0" style="max-width: 620px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.08);">
        
        <!-- Top Crimson Accent Bar -->
        <tr>
          <td height="5" style="background: linear-gradient(90deg, #D9232A 0%, #B91C1C 45%, #0B1930 100%); line-height: 5px; font-size: 5px;">&nbsp;</td>
        </tr>

        <!-- Executive Header Banner -->
        <tr>
          <td style="background: linear-gradient(180deg, #0B1930 0%, #062141 100%); padding: 36px 32px 30px; text-align: center; border-bottom: 1px solid #1E293B;">
            <div style="font-size: 22px; font-weight: 800; letter-spacing: 2.5px; color: #FFFFFF; text-transform: uppercase;">
              VEVRA <span style="color: #D9232A;">PACKAGING</span>
            </div>
            <div style="font-size: 11px; font-weight: 600; letter-spacing: 3px; color: #94A3B8; text-transform: uppercase; margin-top: 5px;">
              ENGINEERED INDUSTRIAL PACKAGING SOLUTIONS
            </div>
            <div style="margin-top: 20px;">
              <span style="display: inline-block; background-color: rgba(217, 35, 42, 0.16); color: #FCA5A5; border: 1px solid rgba(217, 35, 42, 0.35); padding: 5px 18px; border-radius: 20px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">
                APPLICATION RECEIVED &bull; CONFIRMATION
              </span>
            </div>
          </td>
        </tr>

        <!-- Main Body -->
        <tr>
          <td style="padding: 34px 32px 28px; background-color: #ffffff;">
            
            <p style="margin: 0 0 14px; font-size: 16px; color: #062141; font-weight: 700;">
              Dear ' . htmlspecialchars($name) . ',
            </p>
            <p style="margin: 0 0 22px; font-size: 14px; color: #475569; line-height: 1.65;">
              Thank you for applying to build your career with <strong style="color: #062141;">Vevra Packaging Pvt. Ltd.</strong> We have successfully received your credentials for the <strong style="color: #D9232A;">' . htmlspecialchars($position) . '</strong> role under application reference <strong style="color: #062141;">' . htmlspecialchars($appRef) . '</strong>.
            </p>

            <!-- Application Snapshot Table -->
            <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: #062141; text-transform: uppercase; margin-bottom: 8px;">
              Application Snapshot
            </div>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius: 8px; overflow: hidden; border: 1px solid #E2E8F0; margin-bottom: 24px;">
              <tr style="background-color: #F8FAFC;">
                <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; width: 34%; border-bottom: 1px solid #E2E8F0;">Target Position</td>
                <td style="padding: 11px 16px; font-size: 13px; color: #062141; font-weight: 700; border-bottom: 1px solid #E2E8F0;">' . htmlspecialchars($position) . '</td>
              </tr>
              <tr>
                <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Reference Code</td>
                <td style="padding: 11px 16px; font-size: 13px; color: #D9232A; font-weight: 800; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">' . htmlspecialchars($appRef) . '</td>
              </tr>
              <tr>
                <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Resume Document</td>
                <td style="padding: 11px 16px; font-size: 13px; color: #166534; font-weight: 700; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">
                  ' . (!empty($attachment) ? '✓ Attached (' . htmlspecialchars($attachment['name']) . ')' : 'None attached') . '
                </td>
              </tr>
              <tr>
                <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; background-color: #F8FAFC;">Submitted At</td>
                <td style="padding: 11px 16px; font-size: 13px; color: #475569; background-color: #ffffff;">' . htmlspecialchars($submissionTime) . '</td>
              </tr>
            </table>

            <!-- 3-Step Selection Process Card -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px; border-radius: 8px; overflow: hidden; border: 1px solid #E2E8F0; background-color: #F8FAFC;">
              <tr>
                <td style="padding: 18px 20px;">
                  <div style="font-size: 12px; font-weight: 700; color: #062141; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                    Our Transparent Selection Timeline
                  </div>
                  <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                    &bull; <strong>Step 1 &bull; Profile Screening:</strong> Our talent evaluation desk reviews qualifications within 2–3 business days.<br>
                    &bull; <strong>Step 2 &bull; Technical Conversation:</strong> Shortlisted candidates are invited for a video or in-person technical discussion.<br>
                    &bull; <strong>Step 3 &bull; Final Alignment:</strong> Formal offer and onboarding details are extended.
                  </div>
                </td>
              </tr>
            </table>

            <!-- CTA Button -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
              <tr>
                <td align="center">
                  <a href="https://vevrapackaging.com" style="display: inline-block; background-color: #D9232A; color: #ffffff; padding: 12px 30px; border-radius: 6px; font-size: 13px; font-weight: 700; text-decoration: none; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(217, 35, 42, 0.25);">
                    Learn More About Vevra Packaging &rarr;
                  </a>
                </td>
              </tr>
            </table>

            <!-- Sign-off -->
            <div style="border-top: 1px solid #E2E8F0; padding-top: 20px; font-size: 13px; color: #475569; line-height: 1.6;">
              Warm Regards,<br>
              <strong style="color: #062141;">Talent Acquisition & Human Capital Desk</strong><br>
              <span style="color: #D9232A; font-weight: 700;">Vevra Packaging Pvt. Ltd.</span>
            </div>

          </td>
        </tr>

        <!-- Executive Footer -->
        <tr>
          <td style="background-color: #0B1930; padding: 26px 32px; text-align: center; border-top: 1px solid #1E293B;">
            <div style="font-size: 13px; font-weight: 700; color: #FFFFFF; letter-spacing: 1px;">
              VEVRA PACKAGING PVT. LTD.
            </div>
            <div style="font-size: 11px; color: #94A3B8; margin-top: 4px; line-height: 1.6;">
              Human Capital & Talent Acquisition Desk &bull; Quality Assured Industrial Operations<br>
              Questions? Write directly to <a href="mailto:Careers@vevrapackaging.com" style="color: #F87171; text-decoration: none; font-weight: 600;">Careers@vevrapackaging.com</a>
            </div>
            <div style="font-size: 10px; color: #64748B; margin-top: 14px;">
              &copy; ' . date('Y') . ' Vevra Packaging Pvt. Ltd. All Rights Reserved. Confidential & Proprietary.
            </div>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>';

// -------------------------------------------------------------
// RFC 5321 Socket Client with Chunked Streaming for Attachments
// -------------------------------------------------------------
function smtpReadResponseCareer($socket, &$debugLog = null) {
    $response = '';
    while (!feof($socket)) {
        $line = fgets($socket, 1024);
        if ($line === false) break;
        $response .= $line;
        if ($debugLog !== null) {
            $debugLog[] = 'S: ' . trim($line);
        }
        if (preg_match('/^\d{3}\s/', $line) || (strlen(trim($line)) === 3 && ctype_digit(trim($line)))) {
            break;
        }
    }
    return $response;
}

function smtpSendCommandCareer($socket, $command, &$debugLog = null, $maskDebug = false) {
    if ($debugLog !== null) {
        $debugLog[] = 'C: ' . ($maskDebug ? '****** (credentials)' : $command);
    }
    fputs($socket, $command . "\r\n");
    return smtpReadResponseCareer($socket, $debugLog);
}

/**
 * Safe chunked socket writer to ensure 100% of large attachment payloads
 * are written over SSL socket buffers without silent truncation.
 */
function safeSocketWriteCareer($socket, $data) {
    $total = strlen($data);
    $written = 0;
    while ($written < $total) {
        $chunk = substr($data, $written, 8192);
        $res = @fwrite($socket, $chunk);
        if ($res === false || $res === 0) {
            $meta = @stream_get_meta_data($socket);
            if (!empty($meta['timed_out']) || feof($socket)) {
                return false;
            }
            usleep(10000); // 10ms wait before retry
            continue;
        }
        $written += $res;
    }
    return $written;
}

function sendViaSocketSmtpCareer($to, $subject, $htmlBody, $replyTo = null, $attachment = null, $isAutoReply = false, &$debugLog = []) {
    $host     = SMTP_CONFIG['host'];
    $user     = SMTP_CONFIG['user'];
    $pass     = SMTP_CONFIG['pass'];
    $from     = SMTP_CONFIG['from'];
    $fromName = SMTP_CONFIG['fromName'];

    $attempts = [
        ['scheme' => 'ssl://', 'host' => $host, 'port' => 465, 'starttls' => false, 'auth' => true],
        ['scheme' => 'tcp://', 'host' => $host, 'port' => 587, 'starttls' => true,  'auth' => true],
        ['scheme' => 'tcp://', 'host' => '127.0.0.1', 'port' => 25, 'starttls' => false, 'auth' => false],
    ];

    $context = stream_context_create([
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true,
        ]
    ]);

    foreach ($attempts as $cfg) {
        $connStr = "{$cfg['scheme']}{$cfg['host']}:{$cfg['port']}";
        $debugLog[] = "Connecting to {$connStr}...";

        $socket = @stream_socket_client($connStr, $errno, $errstr, 6, STREAM_CLIENT_CONNECT, $context);
        if (!$socket) {
            $debugLog[] = "Socket connect error ({$errno}): {$errstr}";
            continue;
        }

        stream_set_timeout($socket, 15);

        $greeting = smtpReadResponseCareer($socket, $debugLog);
        if (substr($greeting, 0, 3) !== '220') {
            $debugLog[] = "Bad greeting: " . trim($greeting);
            fclose($socket);
            continue;
        }

        $serverName = !empty($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'vevrapackaging.com';

        $ehlo = smtpSendCommandCareer($socket, "EHLO {$serverName}", $debugLog);
        if (substr($ehlo, 0, 3) !== '250') {
            $ehlo = smtpSendCommandCareer($socket, "HELO {$serverName}", $debugLog);
            if (substr($ehlo, 0, 3) !== '250') {
                $debugLog[] = "EHLO/HELO rejected";
                fclose($socket);
                continue;
            }
        }

        if ($cfg['starttls'] && stripos($ehlo, 'STARTTLS') !== false) {
            $stls = smtpSendCommandCareer($socket, "STARTTLS", $debugLog);
            if (substr($stls, 0, 3) === '220') {
                $crypto = STREAM_CRYPTO_METHOD_TLS_CLIENT;
                if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
                    $crypto |= STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
                }
                if (defined('STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT')) {
                    $crypto |= STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT;
                }
                if (!@stream_socket_enable_crypto($socket, true, $crypto)) {
                    $debugLog[] = "TLS negotiation failed";
                    fclose($socket);
                    continue;
                }
                $ehlo = smtpSendCommandCareer($socket, "EHLO {$serverName}", $debugLog);
            }
        }

        if ($cfg['auth']) {
            $authRes = smtpSendCommandCareer($socket, "AUTH LOGIN", $debugLog);
            if (substr($authRes, 0, 3) === '334') {
                $uRes = smtpSendCommandCareer($socket, base64_encode($user), $debugLog, true);
                if (substr($uRes, 0, 3) === '334') {
                    $pRes = smtpSendCommandCareer($socket, base64_encode($pass), $debugLog, true);
                    if (substr($pRes, 0, 3) !== '235') {
                        $debugLog[] = "Password auth failed: " . trim($pRes);
                        fclose($socket);
                        continue;
                    }
                } else {
                    $debugLog[] = "Username auth failed: " . trim($uRes);
                    fclose($socket);
                    continue;
                }
            } else {
                $plainToken = base64_encode("\0" . $user . "\0" . $pass);
                $pRes = smtpSendCommandCareer($socket, "AUTH PLAIN " . $plainToken, $debugLog, true);
                if (substr($pRes, 0, 3) !== '235') {
                    $debugLog[] = "AUTH failed: " . trim($authRes);
                    fclose($socket);
                    continue;
                }
            }
        }

        $mfRes = smtpSendCommandCareer($socket, "MAIL FROM:<{$from}>", $debugLog);
        if (substr($mfRes, 0, 3) !== '250') {
            $debugLog[] = "MAIL FROM rejected: " . trim($mfRes);
            fclose($socket);
            continue;
        }

        $rcptRes = smtpSendCommandCareer($socket, "RCPT TO:<{$to}>", $debugLog);
        if (substr($rcptRes, 0, 3) !== '250' && substr($rcptRes, 0, 3) !== '251') {
            $debugLog[] = "RCPT TO rejected: " . trim($rcptRes);
            fclose($socket);
            continue;
        }

        $dataRes = smtpSendCommandCareer($socket, "DATA", $debugLog);
        if (substr($dataRes, 0, 3) !== '354') {
            $debugLog[] = "DATA rejected: " . trim($dataRes);
            fclose($socket);
            continue;
        }

        // Build RFC-Compliant MIME Headers
        $headers  = "From: {$fromName} <{$from}>\r\n";
        $headers .= "To: <{$to}>\r\n";
        if (!empty($replyTo)) {
            $headers .= "Reply-To: <{$replyTo}>\r\n";
        }
        $headers .= "Subject: {$subject}\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Date: " . date('r') . "\r\n";
        $headers .= "Message-ID: <" . md5(uniqid((string)microtime(true), true)) . "@vevrapackaging.com>\r\n";
        $headers .= "X-Mailer: Vevra Packaging Careers SMTP System\r\n";

        if ($isAutoReply) {
            $headers .= "Auto-Submitted: auto-replied\r\n";
            $headers .= "X-Auto-Response-Suppress: All\r\n";
        }

        $bodyFixed = preg_replace('/^\./m', '..', $htmlBody);

        if ($attachment && !empty($attachment['content'])) {
            $boundary = "==_Vevra_Boundary_" . md5(uniqid((string)microtime(true), true));
            $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

            $safeMimeName = preg_replace('/[^a-zA-Z0-9_\.-]/', '_', $attachment['name']);
            if (empty($safeMimeName)) {
                $safeMimeName = 'Candidate_Resume.pdf';
            }

            $mimeType = !empty($attachment['type']) ? $attachment['type'] : 'application/octet-stream';

            $body  = "--{$boundary}\r\n";
            $body .= "Content-Type: text/html; charset=UTF-8\r\n";
            $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
            $body .= $bodyFixed . "\r\n\r\n";

            $body .= "--{$boundary}\r\n";
            $body .= "Content-Type: {$mimeType}; name=\"{$safeMimeName}\"\r\n";
            $body .= "Content-Description: {$safeMimeName}\r\n";
            $body .= "Content-Disposition: attachment; filename=\"{$safeMimeName}\"\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $body .= chunk_split(base64_encode($attachment['content']), 76, "\r\n");
            $body .= "\r\n--{$boundary}--\r\n";
        } else {
            $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
            $headers .= "Content-Transfer-Encoding: 8bit\r\n";
            $body = $bodyFixed . "\r\n";
        }

        $payload = $headers . "\r\n" . $body . "\r\n.\r\n";

        // Stream entire payload completely through chunked socket writer
        $writtenBytes = safeSocketWriteCareer($socket, $payload);
        if ($writtenBytes === false) {
            $debugLog[] = "Socket streaming failed or timed out during payload transmission";
            fclose($socket);
            continue;
        }
        @fflush($socket);

        $sendRes = smtpReadResponseCareer($socket, $debugLog);
        smtpSendCommandCareer($socket, "QUIT", $debugLog);
        fclose($socket);

        if (substr($sendRes, 0, 3) === '250') {
            return [
                'success' => true,
                'method'  => "Authenticated SMTP ({$connStr})",
                'details' => trim($sendRes)
            ];
        } else {
            $debugLog[] = "Message payload rejected: " . trim($sendRes);
        }
    }

    return [
        'success' => false,
        'method'  => "SMTP Failed",
        'details' => implode(' | ', $debugLog)
    ];
}

// -------------------------------------------------------------
// Send Career Mail Function (Authenticated SMTP primary, cPanel mail() fallback)
// -------------------------------------------------------------
function sendCareerMail($to, $subject, $htmlBody, $replyTo = null, $attachment = null, $isAutoReply = false, $typeLabel = 'Mail') {
    $from     = SMTP_CONFIG['from'];
    $fromName = SMTP_CONFIG['fromName'];
    $debug    = [];

    // 1. Authenticated Socket SMTP (Port 465 SSL primary)
    $smtpRes = sendViaSocketSmtpCareer($to, $subject, $htmlBody, $replyTo, $attachment, $isAutoReply, $debug);
    if ($smtpRes['success']) {
        logCareerDelivery($typeLabel, $to, $smtpRes['method'], true);
        return true;
    }

    // 2. Native cPanel PHP mail() fallback
    $boundary = "==Multipart_Boundary_x" . md5(time() . rand()) . "x";
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "From: {$fromName} <{$from}>\r\n";
    if (!empty($replyTo)) {
        $headers .= "Reply-To: <{$replyTo}>\r\n";
    }
    $headers .= "Return-Path: <{$from}>\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    if ($isAutoReply) {
        $headers .= "Auto-Submitted: auto-replied\r\n";
        $headers .= "X-Auto-Response-Suppress: All\r\n";
    }

    if ($attachment && !empty($attachment['content'])) {
        $safeMimeName = preg_replace('/[^a-zA-Z0-9_\.-]/', '_', $attachment['name']);
        if (empty($safeMimeName)) $safeMimeName = 'Candidate_Resume.pdf';
        $mimeType = !empty($attachment['type']) ? $attachment['type'] : 'application/octet-stream';

        $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
        $body  = "--{$boundary}\r\n";
        $body .= "Content-Type: text/html; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $body .= $htmlBody . "\r\n\r\n";
        $body .= "--{$boundary}\r\n";
        $body .= "Content-Type: {$mimeType}; name=\"{$safeMimeName}\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"{$safeMimeName}\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($attachment['content']), 76, "\r\n");
        $body .= "\r\n--{$boundary}--";
    } else {
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $body = $htmlBody;
    }

    $mailSent = @mail($to, $subject, $body, $headers, "-f " . $from);
    if (!$mailSent) {
        $mailSent = @mail($to, $subject, $body, $headers);
    }

    $note = $mailSent ? 'cPanel Native mail()' : 'Failed (SMTP & local MTA)';
    logCareerDelivery($typeLabel, $to, $note, (bool)$mailSent);
    return (bool)$mailSent;
}

// 1. Admin Email (sent to Careers@vevrapackaging.com, reply to applicant, WITH resume attachment & download button)
$adminSent = sendCareerMail(SMTP_CONFIG['adminTo'], $adminSubject, $adminHtmlBody, $email, $attachment, false, 'Admin Notice');

// 2. User Confirmation Email (sent to applicant, reply to Careers@vevrapackaging.com)
$userSent  = sendCareerMail($email, $userSubject, $userHtmlBody, SMTP_CONFIG['adminTo'], null, true, 'Applicant Notice');

http_response_code(200);
echo json_encode([
    'success'     => true,
    'message'     => 'Application submitted successfully.',
    'appRef'      => $appRef,
    'adminSent'   => (bool)$adminSent,
    'userSent'    => (bool)$userSent,
    'downloadUrl' => $downloadUrl,
]);
