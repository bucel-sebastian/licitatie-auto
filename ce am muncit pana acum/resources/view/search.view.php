<h1>Search page</h1>
<?php
    foreach ($_GET as $key => $value) {
        echo "<p>".$key." - ".$value."</p>";
    }
?>