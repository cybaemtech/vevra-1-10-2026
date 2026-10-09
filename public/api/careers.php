<?php
/**
 * Vevra Packaging - Careers Application Email Backend
 * 
 * Handles career job applications:
 * 1. Sends applicant profile & attached resume to Admin (nikita.nagargoje@cybaemtech.com)
 * 2. Sends confirmation / acknowledgement email to Applicant (from no-reply@vevrapackaging.com)
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
    'hosts'    => ['localhost', 'mail.vevrapackaging.com', '127.0.0.1'],
    'ports'    => [587, 465, 25],
    'user'     => 'no-reply@vevrapackaging.com',
    'pass'     => 'NR_vevra@26#',
    'from'     => 'no-reply@vevrapackaging.com',
    'fromName' => 'Vevra Packaging Careers Desk',
    'adminTo'  => 'nikita.nagargoje@cybaemtech.com',
];

// Extract input data (supports multipart/form-data and JSON)
$name      = trim($_POST['name'] ?? '');
$email     = trim($_POST['email'] ?? '');
$phone     = trim($_POST['phone'] ?? '');
$position  = trim($_POST['position'] ?? '');
$coverPage = trim($_POST['coverPage'] ?? $_POST['coverLetter'] ?? $_POST['message'] ?? '');
$appRef    = trim($_POST['appRef'] ?? ('APP-VVR-' . rand(1000, 9999)));

// If payload sent as raw JSON
if (empty($name) && empty($email)) {
    $raw = file_get_contents('php://input');
    if (!empty($raw)) {
        $json = json_decode($raw, true);
        if (is_array($json)) {
            $name      = trim($json['name'] ?? '');
            $email     = trim($json['email'] ?? '');
            $phone     = trim($json['phone'] ?? '');
            $position  = trim($json['position'] ?? '');
            $coverPage = trim($json['coverPage'] ?? $json['coverLetter'] ?? '');
            $appRef    = trim($json['appRef'] ?? ('APP-VVR-' . rand(1000, 9999)));
        }
    }
}

// Validation
$errors = [];
if (empty($name)) {
    $errors['name'] = 'Full name is required.';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'A valid email address is required.';
}
if (empty($phone)) {
    $errors['phone'] = 'Phone number is required.';
}
if (empty($position) || $position === 'Select a role') {
    $errors['position'] = 'Target role is required.';
}
if (empty($coverPage)) {
    $errors['coverPage'] = 'Cover letter / message is required.';
}

// Handle Resume File Attachment
$attachment = null;
if (!empty($_FILES['resumeFile']) && $_FILES['resumeFile']['error'] === UPLOAD_ERR_OK) {
    $fileTmp  = $_FILES['resumeFile']['tmp_name'];
    $fileName = basename($_FILES['resumeFile']['name']);
    $fileSize = $_FILES['resumeFile']['size'];
    $fileExt  = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    if (in_array($fileExt, ['pdf', 'doc', 'docx']) && $fileSize <= 10 * 1024 * 1024) {
        $fileContent = file_get_contents($fileTmp);
        if ($fileContent !== false) {
            $attachment = [
                'name'    => $fileName,
                'content' => $fileContent,
                'type'    => $_FILES['resumeFile']['type'] ?: 'application/octet-stream',
            ];
        }
    }
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill all required fields properly.',
        'errors'  => $errors,
    ]);
    exit;
}

$submissionTime = date('d M Y, h:i A T');
$userIp = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

// -------------------------------------------------------------
// 1. Build Admin Notification Email HTML
// -------------------------------------------------------------
$adminSubject = "New Job Application: " . htmlspecialchars($name) . " - " . htmlspecialchars($position) . " (" . $appRef . ")";

$adminHtmlBody = '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Job Application Received</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f9; font-family: \'Segoe UI\', Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f6f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0B1930 0%, #1E3A8A 100%); padding: 28px 32px; color: #ffffff;">
              <div style="font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #f87171; margin-bottom: 6px;">
                CAREERS PORTAL &bull; APPLICATION ' . htmlspecialchars($appRef) . '
              </div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff;">
                New Candidate Application
              </h1>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569;">
                A new candidate has submitted an application for the <strong>' . htmlspecialchars($position) . '</strong> position via the Vevra Packaging Careers page.
              </p>

              <!-- Data Table -->
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
                <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                  <td width="35%" style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Candidate Name</td>
                  <td style="color: #1e293b; padding: 10px 12px; font-weight: 600;">' . htmlspecialchars($name) . '</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Role Applied For</td>
                  <td style="color: #D9232A; font-weight: 700; padding: 10px 12px;">' . htmlspecialchars($position) . '</td>
                </tr>
                <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Email Address</td>
                  <td style="color: #1e293b; padding: 10px 12px;"><a href="mailto:' . htmlspecialchars($email) . '" style="color: #1E3A8A; font-weight: 600; text-decoration: none;">' . htmlspecialchars($email) . '</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Phone Number</td>
                  <td style="color: #1e293b; padding: 10px 12px; font-weight: 600;">' . htmlspecialchars($phone) . '</td>
                </tr>
                <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Resume File</td>
                  <td style="color: #1e293b; padding: 10px 12px;">' . ($attachment ? '<strong>' . htmlspecialchars($attachment['name']) . '</strong> (Attached)' : '<span style="color: #94a3b8;">No attachment uploaded</span>') . '</td>
                </tr>
                <tr style="background-color: #ffffff;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px; vertical-align: top;">Cover Letter / Notes</td>
                  <td style="color: #334155; padding: 10px 12px; line-height: 1.6; white-space: pre-line;">' . nl2br(htmlspecialchars($coverPage)) . '</td>
                </tr>
              </table>

              <!-- Meta Footer -->
              <div style="padding: 12px 16px; background-color: #f1f5f9; border-radius: 8px; font-size: 11px; color: #64748b;">
                <strong>Ref ID:</strong> ' . htmlspecialchars($appRef) . ' &nbsp;|&nbsp; <strong>Submitted:</strong> ' . $submissionTime . ' &nbsp;|&nbsp; <strong>IP:</strong> ' . htmlspecialchars($userIp) . '
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0B1930; padding: 18px 32px; text-align: center; color: #94a3b8; font-size: 11px;">
              © 2026 Vevra Packaging Pvt. Ltd. HR &amp; Talent Acquisition Desk
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>';

// -------------------------------------------------------------
// 2. Build Candidate Confirmation Email HTML
// -------------------------------------------------------------
$userSubject = "Application Received: " . htmlspecialchars($position) . " — Vevra Packaging (Ref: " . $appRef . ")";

$userHtmlBody = '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Application Received - Vevra Packaging</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f9; font-family: \'Segoe UI\', Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f6f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0B1930 0%, #1E3A8A 100%); padding: 32px; text-align: left;">
              <div style="font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #f87171; margin-bottom: 6px;">
                VEVRA PACKAGING TALENT ACQUISITION
              </div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff;">
                Thank You for Applying!
              </h1>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 16px 0; font-size: 15px; font-weight: 600; color: #0B1930;">
                Dear ' . htmlspecialchars($name) . ',
              </p>
              
              <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.7; color: #475569;">
                Thank you for your interest in joining <strong>Vevra Packaging Pvt. Ltd.</strong> We have successfully received your application for the position of <strong>' . htmlspecialchars($position) . '</strong>.
              </p>

              <!-- Application Reference Card -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #D9232A; border-radius: 8px; padding: 18px 20px; margin-bottom: 24px;">
                <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #0B1930; margin-bottom: 8px;">
                  APPLICATION DETAILS
                </div>
                <table width="100%" cellpadding="4" cellspacing="0" style="font-size: 13px; color: #334155;">
                  <tr>
                    <td width="36%" style="font-weight: 600; color: #64748b;">Reference ID:</td>
                    <td style="font-weight: 800; color: #D9232A;">' . htmlspecialchars($appRef) . '</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #64748b;">Position:</td>
                    <td style="font-weight: 700; color: #0B1930;">' . htmlspecialchars($position) . '</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #64748b;">Submitted On:</td>
                    <td style="color: #0B1930;">' . $submissionTime . '</td>
                  </tr>
                </table>
              </div>

              <h3 style="font-size: 14px; font-weight: 700; color: #0B1930; margin: 0 0 10px 0;">
                What happens next?
              </h3>
              <p style="margin: 0 0 20px 0; font-size: 13px; line-height: 1.7; color: #475569;">
                Our HR and hiring engineering teams are reviewing your qualifications and profile. If your background aligns with the requirements of this role, a member of our talent team will reach out to schedule an introductory discussion.
              </p>

              <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 20px;">
                <p style="margin: 0; font-size: 13px; font-weight: 700; color: #0B1930;">Best Regards,</p>
                <p style="margin: 2px 0 0 0; font-size: 14px; font-weight: 800; color: #D9232A;">Human Resources &amp; Talent Acquisition</p>
                <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748b;">Vevra Packaging Pvt. Ltd.</p>
                <p style="margin: 4px 0 0 0; font-size: 11px; color: #94a3b8;">
                  6,7, EasyGo House, Survey No.310/A/1, Plot no. 5, Old Mumbai - Pune Hwy, near Somatane Toll Plaza, Maharashtra 410506
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0B1930; padding: 18px 32px; text-align: center; color: #94a3b8; font-size: 11px;">
              © 2026 Vevra Packaging Pvt. Ltd. All Rights Reserved. • Designed by CybaemTech
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>';

// -------------------------------------------------------------
// Helper: Send Mail with optional attachment
// -------------------------------------------------------------
function sendCareerMail($to, $subject, $htmlBody, $replyTo = null, $attachment = null) {
    $from = SMTP_CONFIG['from'];
    $fromName = SMTP_CONFIG['fromName'];

    // Try socket SMTP
    $smtpSuccess = sendViaSocket($to, $subject, $htmlBody, $replyTo, $attachment);
    if ($smtpSuccess) {
        return true;
    }

    // Fallback: standard mail()
    $boundary = "==Multipart_Boundary_x" . md5(time()) . "x";
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "From: {$fromName} <{$from}>\r\n";
    if (!empty($replyTo)) {
        $headers .= "Reply-To: <{$replyTo}>\r\n";
    }
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    if ($attachment) {
        $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
        $body  = "--{$boundary}\r\n";
        $body .= "Content-Type: text/html; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $body .= $htmlBody . "\r\n\r\n";
        $body .= "--{$boundary}\r\n";
        $body .= "Content-Type: {$attachment['type']}; name=\"{$attachment['name']}\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"{$attachment['name']}\"\r\n\r\n";
        $body .= chunk_split(base64_encode($attachment['content'])) . "\r\n\r\n";
        $body .= "--{$boundary}--";
    } else {
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $body = $htmlBody;
    }

    return @mail($to, $subject, $body, $headers);
}

function sendViaSocket($to, $subject, $htmlBody, $replyTo = null, $attachment = null) {
    $hosts = SMTP_CONFIG['hosts'];
    $ports = SMTP_CONFIG['ports'];
    $user  = SMTP_CONFIG['user'];
    $pass  = SMTP_CONFIG['pass'];
    $from  = SMTP_CONFIG['from'];

    foreach ($hosts as $host) {
        foreach ($ports as $port) {
            $isSsl = ($port == 465);
            $protocol = $isSsl ? 'ssl://' : '';
            $socket = @fsockopen($protocol . $host, $port, $errno, $errstr, 4);
            if (!$socket) continue;

            stream_set_timeout($socket, 5);
            $res = fgets($socket, 512);
            if (substr($res, 0, 3) !== '220') {
                fclose($socket);
                continue;
            }

            fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
            $ehloRes = '';
            while ($line = fgets($socket, 512)) {
                $ehloRes .= $line;
                if (substr($line, 3, 1) === ' ') break;
            }

            if ($port == 587 && stripos($ehloRes, 'STARTTLS') !== false) {
                fputs($socket, "STARTTLS\r\n");
                $tlsRes = fgets($socket, 512);
                if (substr($tlsRes, 0, 3) === '220') {
                    if (!@stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                        fclose($socket);
                        continue;
                    }
                    fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
                    while ($line = fgets($socket, 512)) {
                        if (substr($line, 3, 1) === ' ') break;
                    }
                }
            }

            fputs($socket, "AUTH LOGIN\r\n");
            $authRes = fgets($socket, 512);
            if (substr($authRes, 0, 3) === '334') {
                fputs($socket, base64_encode($user) . "\r\n");
                fgets($socket, 512);
                fputs($socket, base64_encode($pass) . "\r\n");
                $loginRes = fgets($socket, 512);
                if (substr($loginRes, 0, 3) !== '235') {
                    fclose($socket);
                    continue;
                }
            }

            fputs($socket, "MAIL FROM: <{$from}>\r\n");
            $mf = fgets($socket, 512);
            if (substr($mf, 0, 3) !== '250') { fclose($socket); continue; }

            fputs($socket, "RCPT TO: <{$to}>\r\n");
            $rcpt = fgets($socket, 512);
            if (substr($rcpt, 0, 3) !== '250') { fclose($socket); continue; }

            fputs($socket, "DATA\r\n");
            $dataRes = fgets($socket, 512);
            if (substr($dataRes, 0, 3) !== '354') { fclose($socket); continue; }

            $boundary = "==Multipart_Boundary_x" . md5(time() . rand()) . "x";
            $headers  = "From: " . SMTP_CONFIG['fromName'] . " <{$from}>\r\n";
            $headers .= "To: <{$to}>\r\n";
            if (!empty($replyTo)) {
                $headers .= "Reply-To: <{$replyTo}>\r\n";
            }
            $headers .= "Subject: {$subject}\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Date: " . date('r') . "\r\n";

            if ($attachment) {
                $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n\r\n";
                $messageData  = $headers;
                $messageData .= "--{$boundary}\r\n";
                $messageData .= "Content-Type: text/html; charset=UTF-8\r\n";
                $messageData .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
                $messageData .= $htmlBody . "\r\n\r\n";
                $messageData .= "--{$boundary}\r\n";
                $messageData .= "Content-Type: {$attachment['type']}; name=\"{$attachment['name']}\"\r\n";
                $messageData .= "Content-Transfer-Encoding: base64\r\n";
                $messageData .= "Content-Disposition: attachment; filename=\"{$attachment['name']}\"\r\n\r\n";
                $messageData .= chunk_split(base64_encode($attachment['content'])) . "\r\n\r\n";
                $messageData .= "--{$boundary}--\r\n.\r\n";
            } else {
                $headers .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
                $messageData = $headers . $htmlBody . "\r\n.\r\n";
            }

            fputs($socket, $messageData);
            $sendRes = fgets($socket, 512);

            fputs($socket, "QUIT\r\n");
            fclose($socket);

            if (substr($sendRes, 0, 3) === '250') {
                return true;
            }
        }
    }

    return false;
}

// -------------------------------------------------------------
// Send Emails
// -------------------------------------------------------------
$adminSent = sendCareerMail(
    SMTP_CONFIG['adminTo'],
    $adminSubject,
    $adminHtmlBody,
    $email,
    $attachment
);

$userSent = sendCareerMail(
    $email,
    $userSubject,
    $userHtmlBody,
    SMTP_CONFIG['from'],
    null
);

// Response
http_response_code(200);
echo json_encode([
    'success'   => true,
    'message'   => 'Application submitted successfully.',
    'appRef'    => $appRef,
    'adminSent' => (bool)$adminSent,
    'userSent'  => (bool)$userSent,
]);
