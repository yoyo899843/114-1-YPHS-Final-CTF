<?php
// 如果沒有 Cookie，就給他一個 role=user
if (!isset($_COOKIE['role'])) {
    setcookie("role", "user", time() + 3600, "/");
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>會員系統</title>
    <meta charset="utf-8">
</head>
<body>
    <h2>歡迎來到秘密俱樂部</h2>
    <p>您目前的身份是：<b><?php echo isset($_COOKIE['role']) ? $_COOKIE['role'] : "user"; ?></b></p>
    <p>只有管理員 (admin) 才能進入 <a href="admin.php">管理後台</a> 查看 Flag。</p>
</body>
</html>