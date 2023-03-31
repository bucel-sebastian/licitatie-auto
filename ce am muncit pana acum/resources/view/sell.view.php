<?php
    $page_title = "Vinde - ";
?>

<!DOCTYPE html>
<html lang="ro">
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
        <div class="page-content">
            <h1>Vinde page</h1>
            
          

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