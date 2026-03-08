<?php
header_remove("X-Frame-Options");
header("Content-Security-Policy: frame-ancestors *");
readfile("TaptealWaterTrailMap.html");
?>
