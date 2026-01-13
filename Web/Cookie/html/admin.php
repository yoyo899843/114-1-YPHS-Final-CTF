<?php
$role = isset($_COOKIE['role']) ? $_COOKIE['role'] : "";

if ($role === "admin") {
    echo "<h1>管理員您好！</h1>";
    echo "<p>這是您的 Flag: <b>FLAG{C00kie_M4nipulati0n_is_Easy}</b></p>";
} else {
    echo "<h1>存取被拒絕</h1>";
    echo "<p>對不起，您的身份是 $role，您沒有權限訪問此頁面。</p>";
    echo "<a href='index.php'>回首頁</a>";
}
?>