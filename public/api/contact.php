<?php
/**
 * Vevra Packaging - Contact Form Email Backend
 * No database required - pure authenticated mail transmission.
 */

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(["status" => "ok"]);
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "POST method required"]);
    exit;
}

// Support both JSON payloads (React/TanStack) and standard $_POST form submissions
$rawInput = file_get_contents('php://input');
$json = [];
if (!empty($rawInput)) {
    $decoded = json_decode($rawInput, true);
    if (is_array($decoded)) {
        $json = $decoded;
    }
}
$data = array_merge($_POST, $json);

$name        = trim($data['fullName']    ?? $data['name']    ?? '');
$mobile      = trim($data['phone']       ?? $data['mobile']  ?? '');
$email       = trim($data['email']       ?? '');
$company     = trim($data['company']     ?? '');
$location    = trim($data['location']    ?? '');
$enquiryType = trim($data['enquiryType'] ?? $data['service'] ?? 'General Inquiry');
$message     = trim($data['message']     ?? $data['query']   ?? '');

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Full Name and Email are required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Please enter a valid email address"]);
    exit;
}

$submissionId = 'VVR-' . date('YmdHis') . '-' . substr(md5(uniqid()), 0, 4);
$adminEmail   = "enquiries@vevrapackaging.com";
$fromEmail    = "no-reply@vevrapackaging.com";
$fromPassword = "no-vevra@2026";
$fromName     = "Vevra Packaging Pvt. Ltd.";

/* ─────────────────────────────────────────────
   ADMIN / RECEIVER EMAIL (Executive Vevra Theme)
   ───────────────────────────────────────────── */
$adminSubject = "New Website Inquiry: " . htmlspecialchars($name) . " - " . htmlspecialchars($company ? $company : $enquiryType) . " (" . $submissionId . ")";

$adminHtml = '<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Website Inquiry - Vevra Packaging</title>
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
                NEW INQUIRY &bull; ' . $submissionId . '
              </span>
            </div>
          </td>
        </tr>

        <!-- Main Content -->
        <tr>
          <td style="padding: 34px 32px 24px; background-color: #ffffff;">
            
            <p style="margin: 0 0 20px; font-size: 14px; color: #475569; line-height: 1.5;">
              A new enterprise packaging inquiry has been submitted via the <strong style="color: #062141;">vevrapackaging.com</strong> consultation desk.
            </p>

            <!-- Metadata Details Grid -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius: 8px; overflow: hidden; border: 1px solid #E2E8F0; margin-bottom: 22px;">
              <tr style="background-color: #F8FAFC;">
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; width: 34%; border-bottom: 1px solid #E2E8F0;">Client Full Name</td>
                <td style="padding: 12px 16px; font-size: 14px; color: #062141; font-weight: 700; border-bottom: 1px solid #E2E8F0;">' . htmlspecialchars($name) . '</td>
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
                  ' . (!empty($mobile) ? '<a href="tel:' . htmlspecialchars(preg_replace('/[^0-9+]/', '', $mobile)) . '" style="color: #062141; text-decoration: none; font-weight: 700;">' . htmlspecialchars($mobile) . '</a>' : '<span style="color: #94A3B8; font-style: italic;">Not provided</span>') . '
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Company / Entity</td>
                <td style="padding: 12px 16px; font-size: 14px; color: #062141; font-weight: 700; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">
                  ' . (!empty($company) ? htmlspecialchars($company) : '<span style="color: #94A3B8; font-style: italic;">Not provided</span>') . '
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Location / Plant</td>
                <td style="padding: 12px 16px; font-size: 14px; color: #062141; font-weight: 600; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">
                  ' . (!empty($location) ? htmlspecialchars($location) : '<span style="color: #94A3B8; font-style: italic;">Not provided</span>') . '
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Enquiry Classification</td>
                <td style="padding: 12px 16px; font-size: 14px; color: #D9232A; font-weight: 800; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">' . htmlspecialchars($enquiryType) . '</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; background-color: #F8FAFC;">Submission Time</td>
                <td style="padding: 12px 16px; font-size: 13px; color: #475569; background-color: #ffffff;">' . date('d M Y, h:i A T') . '</td>
              </tr>
            </table>

            <!-- Requirement Details Callout Box -->
            <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #D9232A; border-radius: 6px; padding: 18px 20px; margin-bottom: 24px;">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: #062141; text-transform: uppercase; margin-bottom: 8px;">
                Client Requirement / Message Scope
              </div>
              <div style="font-size: 14px; color: #1E293B; line-height: 1.65; white-space: pre-line;">' . (!empty($message) ? nl2br(htmlspecialchars($message)) : '<span style="color: #94A3B8; font-style: italic;">No specific message or notes entered.</span>') . '</div>
            </div>

            <!-- Quick Action Row -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 10px;">
              <tr>
                <td align="center">
                  <a href="mailto:' . htmlspecialchars($email) . '?subject=Re:%20Packaging%20Inquiry%20[' . $submissionId . ']%20-%20Vevra%20Packaging" style="display: inline-block; background-color: #D9232A; color: #ffffff; padding: 12px 28px; border-radius: 6px; font-size: 13px; font-weight: 700; text-decoration: none; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(217, 35, 42, 0.25);">
                    ✉️ Reply to Client (' . htmlspecialchars($email) . ')
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
              Engineered Industrial Packaging &bull; Returnable Solutions &bull; Quality Assured<br>
              Direct Client Desk: <a href="mailto:enquiries@vevrapackaging.com" style="color: #F87171; text-decoration: none; font-weight: 600;">enquiries@vevrapackaging.com</a>
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

/* ─────────────────────────────────────────────
   USER / SENDER CONFIRMATION EMAIL (Executive Vevra Theme)
   ───────────────────────────────────────────── */
$userSubject = "Thank you for contacting Vevra Packaging (Ref: " . $submissionId . ")";

$userHtml = '<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Inquiry Confirmed - Vevra Packaging</title>
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
                CONSULTATION REQUEST CONFIRMED
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
              Thank you for connecting with <strong style="color: #062141;">Vevra Packaging Pvt. Ltd.</strong> We have successfully received your inquiry regarding <strong style="color: #D9232A;">' . htmlspecialchars($enquiryType) . '</strong>. Your inquiry reference ID is <strong style="color: #062141;">' . $submissionId . '</strong>.
            </p>

            <!-- Commitment Card -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px; border-radius: 8px; overflow: hidden; border: 1px solid #BBF7D0; background-color: #F0FDF4;">
              <tr>
                <td style="padding: 16px 20px;">
                  <div style="font-size: 13px; font-weight: 700; color: #166534; margin-bottom: 4px;">
                    ✓ Guaranteed Technical Turnaround
                  </div>
                  <div style="font-size: 12px; color: #15803D; line-height: 1.5;">
                    Our packaging engineering & design consultants are reviewing your requirements and will connect with you within <strong>1 business day</strong>.
                  </div>
                </td>
              </tr>
            </table>

            <!-- Summary Table -->
            <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: #062141; text-transform: uppercase; margin-bottom: 8px;">
              Inquiry Summary
            </div>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius: 8px; overflow: hidden; border: 1px solid #E2E8F0; margin-bottom: 26px;">
              <tr style="background-color: #F8FAFC;">
                <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; width: 34%; border-bottom: 1px solid #E2E8F0;">Enquiry Type</td>
                <td style="padding: 11px 16px; font-size: 13px; color: #062141; font-weight: 700; border-bottom: 1px solid #E2E8F0;">' . htmlspecialchars($enquiryType) . '</td>
              </tr>
              ' . (!empty($company) ? '<tr>
                <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Company</td>
                <td style="padding: 11px 16px; font-size: 13px; color: #062141; font-weight: 600; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">' . htmlspecialchars($company) . '</td>
              </tr>' : '') . '
              ' . (!empty($location) ? '<tr>
                <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">Location</td>
                <td style="padding: 11px 16px; font-size: 13px; color: #062141; font-weight: 600; border-bottom: 1px solid #E2E8F0; background-color: #ffffff;">' . htmlspecialchars($location) . '</td>
              </tr>' : '') . '
              <tr>
                <td style="padding: 11px 16px; font-size: 11px; font-weight: 700; color: #64748B; letter-spacing: 1px; text-transform: uppercase; background-color: #F8FAFC;">Reference ID</td>
                <td style="padding: 11px 16px; font-size: 13px; color: #D9232A; font-weight: 800; background-color: #ffffff;">' . $submissionId . '</td>
              </tr>
            </table>

            <!-- Next Steps -->
            <div style="font-size: 13px; color: #334155; line-height: 1.7; margin-bottom: 24px;">
              In the meantime, feel free to explore our comprehensive range of custom corrugated cartons, heavy-duty wooden crates, and sustainable protective packaging on our portal.
            </div>

            <!-- CTA Button -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
              <tr>
                <td align="center">
                  <a href="https://vevrapackaging.com" style="display: inline-block; background-color: #D9232A; color: #ffffff; padding: 12px 30px; border-radius: 6px; font-size: 13px; font-weight: 700; text-decoration: none; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(217, 35, 42, 0.25);">
                    Explore Vevra Packaging Solutions &rarr;
                  </a>
                </td>
              </tr>
            </table>

            <!-- Sign-off -->
            <div style="border-top: 1px solid #E2E8F0; padding-top: 20px; font-size: 13px; color: #475569; line-height: 1.6;">
              Warm Regards,<br>
              <strong style="color: #062141;">Client Solutions & Technical Consulting Desk</strong><br>
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
              Engineered Industrial Packaging &bull; Returnable Solutions &bull; Quality Assured<br>
              Questions? Write directly to <a href="mailto:enquiries@vevrapackaging.com" style="color: #F87171; text-decoration: none; font-weight: 600;">enquiries@vevrapackaging.com</a>
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

/* ─────────────────────────────────────────────
   AUTHENTICATED SMTP DUAL-DELIVERY ENGINE
   ───────────────────────────────────────────── */
function sendVevraDualEmails($adminEmail, $adminSubject, $adminHtml, $userEmail, $userSubject, $userHtml, $fromEmail, $fromPassword, $fromName) {
    $host = 'mail.vevrapackaging.com';
    $port = 465;

    $adminSent = false;
    $userSent  = false;

    $context = stream_context_create([
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true
        ]
    ]);

    $socket = @stream_socket_client("ssl://{$host}:{$port}", $errno, $errstr, 5, STREAM_CLIENT_CONNECT, $context);

    if ($socket) {
        stream_set_timeout($socket, 8);

        $readResponse = function() use ($socket) {
            $res = '';
            while (!feof($socket)) {
                $line = fgets($socket, 1024);
                if ($line === false) break;
                $res .= $line;
                if (preg_match('/^\d{3}\s/', $line) || (strlen(trim($line)) === 3 && ctype_digit(trim($line)))) break;
            }
            return $res;
        };

        $sendCmd = function($cmd) use ($socket, $readResponse) {
            fputs($socket, $cmd . "\r\n");
            return $readResponse();
        };

        $greeting = $readResponse();
        if (substr($greeting, 0, 3) === '220') {
            $sendCmd("EHLO vevrapackaging.com");

            // Authenticate with verified credentials
            $auth = $sendCmd("AUTH LOGIN");
            $authOk = false;
            if (substr($auth, 0, 3) === '334') {
                $sendCmd(base64_encode($fromEmail));
                $passRes = $sendCmd(base64_encode($fromPassword));
                if (substr($passRes, 0, 3) === '235') {
                    $authOk = true;
                }
            } else {
                $plainToken = base64_encode("\0" . $fromEmail . "\0" . $fromPassword);
                $passRes = $sendCmd("AUTH PLAIN " . $plainToken);
                if (substr($passRes, 0, 3) === '235') {
                    $authOk = true;
                }
            }

            if ($authOk) {
                // Internal helper to send message on current authenticated socket
                $sendMessage = function($to, $subject, $htmlContent, $replyTo, $isAutoReply = false) use ($socket, $sendCmd, $readResponse, $fromEmail, $fromName) {
                    if (substr($sendCmd("MAIL FROM:<{$fromEmail}>"), 0, 3) !== '250') {
                        return false;
                    }
                    $rcpt = $sendCmd("RCPT TO:<{$to}>");
                    if (substr($rcpt, 0, 3) !== '250' && substr($rcpt, 0, 3) !== '251') {
                        return false;
                    }
                    if (substr($sendCmd("DATA"), 0, 3) !== '354') {
                        return false;
                    }

                    $headers  = "From: {$fromName} <{$fromEmail}>\r\n";
                    $headers .= "To: <{$to}>\r\n";
                    if (!empty($replyTo)) {
                        $headers .= "Reply-To: <{$replyTo}>\r\n";
                    }
                    $headers .= "Subject: {$subject}\r\n";
                    $headers .= "MIME-Version: 1.0\r\n";
                    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
                    $headers .= "Content-Transfer-Encoding: 8bit\r\n";
                    $headers .= "Date: " . date('r') . "\r\n";
                    $headers .= "Message-ID: <" . md5(uniqid((string)microtime(true), true)) . "@vevrapackaging.com>\r\n";
                    if ($isAutoReply) {
                        $headers .= "Auto-Submitted: auto-replied\r\n";
                        $headers .= "X-Auto-Response-Suppress: All\r\n";
                    }

                    $bodyFixed = preg_replace('/^\./m', '..', $htmlContent);
                    fputs($socket, $headers . "\r\n" . $bodyFixed . "\r\n.\r\n");

                    $final = $readResponse();
                    return (substr($final, 0, 3) === '250');
                };

                // 1. Send Admin Notification Email
                $adminSent = $sendMessage($adminEmail, $adminSubject, $adminHtml, $userEmail, false);

                // 2. Reset transaction & Send User Confirmation Email in same session
                $sendCmd("RSET");
                $userSent = $sendMessage($userEmail, $userSubject, $userHtml, $adminEmail, true);
            }

            $sendCmd("QUIT");
        }
        fclose($socket);
    }

    // Fallbacks if SMTP was unreachable or one failed:
    if (!$adminSent) {
        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
        $headers .= "Reply-To: <{$userEmail}>\r\n";
        $headers .= "Return-Path: <{$fromEmail}>\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "Content-Transfer-Encoding: 8bit\r\n";
        $adminSent = (bool)@mail($adminEmail, $adminSubject, $adminHtml, $headers, "-f " . $fromEmail);
    }

    if (!$userSent) {
        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
        $headers .= "Reply-To: <{$adminEmail}>\r\n";
        $headers .= "Return-Path: <{$fromEmail}>\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "Content-Transfer-Encoding: 8bit\r\n";
        $headers .= "Auto-Submitted: auto-replied\r\n";
        $userSent = (bool)@mail($userEmail, $userSubject, $userHtml, $headers, "-f " . $fromEmail);
    }

    return ['admin' => $adminSent, 'user' => $userSent];
}

/* ─────────────────────────────────────────────
   SEND BOTH EMAILS
   ───────────────────────────────────────────── */
$result = sendVevraDualEmails(
    $adminEmail,
    $adminSubject,
    $adminHtml,
    $email,
    $userSubject,
    $userHtml,
    $fromEmail,
    $fromPassword,
    $fromName
);

$adminSent = $result['admin'];
$userSent  = $result['user'];

if ($adminSent || $userSent) {
    http_response_code(200);
    echo json_encode([
        "success"   => true,
        "message"   => "Thank you! Your inquiry has been received. Our team will get back to you within 1 business day.",
        "id"        => $submissionId,
        "adminSent" => (bool)$adminSent,
        "userSent"  => (bool)$userSent
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to send inquiry. Please try again or email us directly at enquiries@vevrapackaging.com",
        "id"      => $submissionId
    ]);
}
