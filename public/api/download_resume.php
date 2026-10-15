<?php
/**
 * Vevra Packaging - Secure Resume Downloader
 * 
 * Allows HR & Administrators at Careers@vevrapackaging.com to securely download
 * applicant resumes with proper MIME headers and disposition.
 */

// Basic error protection
error_reporting(0);
ini_set('display_errors', '0');

$file = basename($_GET['file'] ?? '');

if (empty($file) || !preg_match('/^APP-VVR-[A-Za-z0-9_\.-]+$/', $file)) {
    http_response_code(400);
    echo '<!DOCTYPE html><html><body style="font-family: Arial, sans-serif; padding: 40px; text-align: center;">';
    echo '<h2 style="color: #D9232A;">Invalid Resume Request</h2>';
    echo '<p style="color: #64748b;">The requested file reference code is invalid or missing.</p>';
    echo '</body></html>';
    exit;
}

$filePath = __DIR__ . '/resumes/' . $file;

if (!file_exists($filePath) || !is_readable($filePath)) {
    http_response_code(404);
    echo '<!DOCTYPE html><html><body style="font-family: Arial, sans-serif; padding: 40px; text-align: center;">';
    echo '<h2 style="color: #D9232A;">Resume File Not Found</h2>';
    echo '<p style="color: #64748b;">The requested resume may have been moved, expired, or removed for security compliance.</p>';
    echo '</body></html>';
    exit;
}

// Extract human-friendly original filename
$cleanName = preg_replace('/^APP-VVR-\d+[-_]?/', '', $file);
if (empty($cleanName)) {
    $cleanName = 'Candidate_Resume.pdf';
}

$ext = strtolower(pathinfo($cleanName, PATHINFO_EXTENSION));
$mimeType = 'application/octet-stream';
if ($ext === 'pdf') {
    $mimeType = 'application/pdf';
} elseif ($ext === 'docx') {
    $mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
} elseif ($ext === 'doc') {
    $mimeType = 'application/msword';
}

// Force immediate file download
header('Content-Description: File Transfer');
header('Content-Type: ' . $mimeType);
header('Content-Disposition: attachment; filename="' . str_replace('"', '', $cleanName) . '"');
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Pragma: public');
header('Content-Length: ' . filesize($filePath));

// Clear output buffer if any
while (ob_get_level()) {
    ob_end_clean();
}

readfile($filePath);
exit;
