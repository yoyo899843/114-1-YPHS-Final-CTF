<?php
$output = "";
if (isset($_POST['host'])) {
    $host = $_POST['host'];

    // 毫無防備的程式碼：直接把輸入丟進 shell_exec
    // 預期指令: ping -c 3 [USER_INPUT]
    $cmd = "ping -c 3 " . $host;
    $output = shell_exec($cmd . " 2>&1");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Network Ping Tool</title>
    <style>
        body { font-family: sans-serif; margin: 50px; }
        pre { background: #eee; padding: 10px; }
    </style>
</head>
<body>
    <h2>Network Ping Tool</h2>
    <p>輸入 IP 地址來測試連線狀況：</p>
    <form method="POST">
        <input type="text" name="host" placeholder="8.8.8.8">
        <input type="submit" value="Ping!">
    </form>
    
    <?php if ($output): ?>
        <h3>Results:</h3>
        <pre><?php echo $output; ?></pre>
    <?php endif; ?>
</body>
</html>