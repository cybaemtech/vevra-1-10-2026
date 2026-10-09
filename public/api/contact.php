<?php
/**
 * Vevra Packaging - Contact Form Email Backend
 * 
 * Handles contact form submissions:
 * 1. Sends lead notification to Admin (nikita.nagargoje@cybaemtech.com)
 * 2. Sends confirmation / thank you email to User (from no-reply@vevrapackaging.com)
 */

// Enable error logging while keeping JSON response clean
error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

// CORS Headers
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['status' => 'ok']);
    exit;
}

// Only allow POST requests
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
    'fromName' => 'Vevra Packaging Pvt. Ltd.',
    'adminTo'  => 'nikita.nagargoje@cybaemtech.com',
];

// Read input data (support both JSON payload and standard x-www-form-urlencoded / multipart)
$rawInput = file_get_contents('php://input');
$data = [];

if (!empty($rawInput)) {
    $decoded = json_decode($rawInput, true);
    if (is_array($decoded)) {
        $data = $decoded;
    }
}

if (empty($data) && !empty($_POST)) {
    $data = $_POST;
}

// Sanitize inputs
$fullName    = trim($data['fullName'] ?? $data['name'] ?? '');
$email       = trim($data['email'] ?? $data['mail'] ?? '');
$phone       = trim($data['phone'] ?? '');
$company     = trim($data['company'] ?? '');
$location    = trim($data['location'] ?? '');
$enquiryType = trim($data['enquiryType'] ?? $data['enquiry_type'] ?? 'General Inquiry');
$message     = trim($data['message'] ?? '');

// Validation
$errors = [];
if (empty($fullName)) {
    $errors['fullName'] = 'Full Name is required.';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'A valid email address is required.';
}
if (empty($company)) {
    $errors['company'] = 'Company name is required.';
}
if (empty($location)) {
    $errors['location'] = 'Location is required.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please correct the errors in the form.',
        'errors'  => $errors
    ]);
    exit;
}

$submissionTime = date('d M Y, h:i A T');
$userIp = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

// -------------------------------------------------------------
// 1. Build Admin Notification Email
// -------------------------------------------------------------
$adminSubject = "New Inquiry: " . htmlspecialchars($fullName) . " - " . htmlspecialchars($company);

$adminHtmlBody = '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Contact Form Submission</title>
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
                NEW INQUIRY RECEIVED
              </div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff;">
                Vevra Packaging Web Portal
              </h1>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569;">
                A new business requirement has been submitted through the contact page on the Vevra Packaging website.
              </p>

              <!-- Data Table -->
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
                <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                  <td width="35%" style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Full Name</td>
                  <td style="color: #1e293b; padding: 10px 12px; font-weight: 600;">' . htmlspecialchars($fullName) . '</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Email Address</td>
                  <td style="color: #1e293b; padding: 10px 12px;"><a href="mailto:' . htmlspecialchars($email) . '" style="color: #1E3A8A; font-weight: 600; text-decoration: none;">' . htmlspecialchars($email) . '</a></td>
                </tr>
                <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Phone Number</td>
                  <td style="color: #1e293b; padding: 10px 12px;">' . (!empty($phone) ? htmlspecialchars($phone) : '<span style="color: #94a3b8;">Not Provided</span>') . '</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Company / Organization</td>
                  <td style="color: #1e293b; padding: 10px 12px; font-weight: 600;">' . htmlspecialchars($company) . '</td>
                </tr>
                <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Location (City/Country)</td>
                  <td style="color: #1e293b; padding: 10px 12px;">' . htmlspecialchars($location) . '</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px;">Enquiry Type</td>
                  <td style="color: #D9232A; font-weight: 700; padding: 10px 12px;">' . htmlspecialchars($enquiryType) . '</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="font-weight: 700; color: #0B1930; padding: 10px 12px; vertical-align: top;">Packaging Details / Message</td>
                  <td style="color: #334155; padding: 10px 12px; line-height: 1.6; white-space: pre-line;">' . (!empty($message) ? nl2br(htmlspecialchars($message)) : '<span style="color: #94a3b8; font-style: italic;">No specific message provided</span>') . '</td>
                </tr>
              </table>

              <!-- Meta Footer -->
              <div style="padding: 12px 16px; background-color: #f1f5f9; border-radius: 8px; font-size: 11px; color: #64748b;">
                <strong>Submission Time:</strong> ' . $submissionTime . ' &nbsp;|&nbsp; <strong>IP:</strong> ' . htmlspecialchars($userIp) . '
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0B1930; padding: 18px 32px; text-align: center; color: #94a3b8; font-size: 11px;">
              © 2026 Vevra Packaging Pvt. Ltd. Automated Notification System
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>';

// -------------------------------------------------------------
// 2. Build User Auto-Reply / Thank You Email
// -------------------------------------------------------------
$userSubject = "Thank you for connecting with Vevra Packaging";

$userHtmlBody = '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You - Vevra Packaging</title>
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
                VEVRA PACKAGING PVT. LTD.
              </div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff;">
                Thank You for Connecting With Us!
              </h1>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 16px 0; font-size: 15px; font-weight: 600; color: #0B1930;">
                Dear ' . htmlspecialchars($fullName) . ',
              </p>
              
              <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.7; color: #475569;">
                Thank you for reaching out to <strong>Vevra Packaging Pvt. Ltd.</strong> We have successfully received your inquiry regarding <strong>' . htmlspecialchars($enquiryType) . '</strong> for <strong>' . htmlspecialchars($company) . '</strong>.
              </p>

              <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.7; color: #475569;">
                Our technical packaging engineering team is currently reviewing your requirements. A dedicated specialist will reach out to you within <strong>1 business day</strong> to discuss optimized transit protection, specifications, and commercial estimates.
              </p>

              <!-- Summary Card -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #D9232A; border-radius: 8px; padding: 18px 20px; margin-bottom: 24px;">
                <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #0B1930; margin-bottom: 10px;">
                  SUMMARY OF YOUR INQUIRY
                </div>
                <table width="100%" cellpadding="4" cellspacing="0" style="font-size: 13px; color: #334155;">
                  <tr>
                    <td width="32%" style="font-weight: 600; color: #64748b;">Enquiry Type:</td>
                    <td style="font-weight: 700; color: #0B1930;">' . htmlspecialchars($enquiryType) . '</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #64748b;">Company:</td>
                    <td style="color: #0B1930;">' . htmlspecialchars($company) . '</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #64748b;">Location:</td>
                    <td style="color: #0B1930;">' . htmlspecialchars($location) . '</td>
                  </tr>
                </table>
              </div>

              <p style="margin: 0 0 20px 0; font-size: 13px; line-height: 1.6; color: #64748b;">
                If you have any urgent engineering questions in the meantime, feel free to reply directly to this email or visit our corporate headquarters.
              </p>

              <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 20px;">
                <p style="margin: 0; font-size: 13px; font-weight: 700; color: #0B1930;">Warm Regards,</p>
                <p style="margin: 2px 0 0 0; font-size: 14px; font-weight: 800; color: #D9232A;">Client Solutions &amp; Engineering Desk</p>
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
// Send Emails Helper (Socket SMTP with PHP mail() fallback)
// -------------------------------------------------------------
function sendHtmlMail($to, $toName, $subject, $htmlBody, $replyToEmail = null, $replyToName = null) {
    $from = SMTP_CONFIG['from'];
    $fromName = SMTP_CONFIG['fromName'];

    // Try socket SMTP first
    $smtpSuccess = sendViaSocketSmtp($to, $subject, $htmlBody, $replyToEmail);
    if ($smtpSuccess) {
        return true;
    }

    // Fallback: standard PHP mail()
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$fromName} <{$from}>\r\n";
    if (!empty($replyToEmail)) {
        $replyName = !empty($replyToName) ? $replyToName : $replyToEmail;
        $headers .= "Reply-To: {$replyName} <{$replyToEmail}>\r\n";
    }
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    return @mail($to, $subject, $htmlBody, $headers);
}

/**
 * Direct Socket SMTP Sender
 */
function sendViaSocketSmtp($to, $subject, $htmlBody, $replyTo = null) {
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
            if (!$socket) {
                continue;
            }

            stream_set_timeout($socket, 5);
            $res = fgets($socket, 512);
            if (substr($res, 0, 3) !== '220') {
                fclose($socket);
                continue;
            }

            // EHLO
            fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
            $ehloRes = '';
            while ($line = fgets($socket, 512)) {
                $ehloRes .= $line;
                if (substr($line, 3, 1) === ' ') break;
            }

            // STARTTLS if port 587
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

            // AUTH LOGIN
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

            // MAIL FROM
            fputs($socket, "MAIL FROM: <{$from}>\r\n");
            $mf = fgets($socket, 512);
            if (substr($mf, 0, 3) !== '250') {
                fclose($socket);
                continue;
            }

            // RCPT TO
            fputs($socket, "RCPT TO: <{$to}>\r\n");
            $rcpt = fgets($socket, 512);
            if (substr($rcpt, 0, 3) !== '250') {
                fclose($socket);
                continue;
            }

            // DATA
            fputs($socket, "DATA\r\n");
            $dataRes = fgets($socket, 512);
            if (substr($dataRes, 0, 3) !== '354') {
                fclose($socket);
                continue;
            }

            $headers  = "From: " . SMTP_CONFIG['fromName'] . " <{$from}>\r\n";
            $headers .= "To: <{$to}>\r\n";
            if (!empty($replyTo)) {
                $headers .= "Reply-To: <{$replyTo}>\r\n";
            }
            $headers .= "Subject: {$subject}\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
            $headers .= "Date: " . date('r') . "\r\n";

            $messageData = $headers . "\r\n" . $htmlBody . "\r\n.\r\n";
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
// Execute Email Sending
// -------------------------------------------------------------
$adminSent = sendHtmlMail(
    SMTP_CONFIG['adminTo'],
    'Vevra Admin',
    $adminSubject,
    $adminHtmlBody,
    $email,
    $fullName
);

$userSent = sendHtmlMail(
    $email,
    $fullName,
    $userSubject,
    $userHtmlBody,
    SMTP_CONFIG['from'],
    SMTP_CONFIG['fromName']
);

// Return JSON response
http_response_code(200);
echo json_encode([
    'success'    => true,
    'message'    => 'Thank you! Your inquiry has been submitted and confirmation emails have been sent.',
    'adminSent'  => (bool)$adminSent,
    'userSent'   => (bool)$userSent,
    'data'       => [
        'fullName'    => $fullName,
        'email'       => $email,
        'company'     => $company,
        'enquiryType' => $enquiryType,
    ]
]);
