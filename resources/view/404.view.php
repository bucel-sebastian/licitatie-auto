<?php
    $page_title = "Acasă";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>
        <?php echo $page_title; ?>
    </title>
    <?php
        include ABSPATH . 'resources/modules/head.module.php';
        include ABSPATH . 'resources/modules/style.module.php';
    ?>

</head>
<body>
    <div class="page-wrap">
        <?php
            include ABSPATH . 'resources/modules/header.module.php';
        ?>
        <div class="page-content page-404">
            

            <div class="content-404">
                <h1>Această pagină nu există</h1>
                <span>404</span>
            </div>

            
        </div>
        
        
        <?php
            include ABSPATH . 'resources/modules/footer.module.php';
        ?>

    </div>
    <?php
        include ABSPATH . 'resources/modules/scripts.module.php';
        include ABSPATH . 'resources/modules/js.module.php';
    ?>
</body>
</html>