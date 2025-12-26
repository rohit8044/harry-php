<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file']) && isset($_POST['password'])) {
    $file = $_FILES['file']['tmp_name'];
    $password = $_POST['password'];
    $action = $_POST['action'];
    $filename = basename($_FILES['file']['name']);
    $output_dir = "uploads/";

    if (!is_dir($output_dir)) mkdir($output_dir);

    if ($action === 'encrypt') {
        $data = file_get_contents($file);
        $encrypted = openssl_encrypt($data, 'AES-256-CBC', $password, 0, substr(hash('sha256', $password), 0, 16));
        file_put_contents($output_dir . $filename . '.enc', $encrypted);
        echo "<h2>✅ File Encrypted Successfully!</h2><a href='" . $output_dir . $filename . ".enc' download>Download Encrypted File</a>";
    } else {
        $data = file_get_contents($file);
        $decrypted = openssl_decrypt($data, 'AES-256-CBC', $password, 0, substr(hash('sha256', $password), 0, 16));
        if ($decrypted === false) {
            echo "<h2>❌ Decryption Failed! Wrong Password or Invalid File.</h2>";
        } else {
            file_put_contents($output_dir . 'decrypted_' . $filename, $decrypted);
            echo "<h2>✅ File Decrypted Successfully!</h2><a href='" . $output_dir . "decrypted_" . $filename . "' download>Download Decrypted File</a>";
        }
    }
} else {
    echo "<h2>❌ Invalid Request</h2>";
}
?>