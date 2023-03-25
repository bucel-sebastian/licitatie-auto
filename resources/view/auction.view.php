<?php
    extract($params);




    $page_title = " - ";
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
            
            <div>
                <div>
                    <h2><?php echo "nume"?></h2>
                </div>
                <div>
                    <p><?php echo "text text text"?></p>
                </div>
            </div>
           

            <div class='page-image-row'>
                <div class='auction-page-col-1' style="background:red">
                    <img src="" alt="">
                </div>
                <div class='auction-page-col-2' style="background:white">
                    <div class='auction-image-cols' >
                        <div class='auction-images-group' style="background:white">
                            <img src="" alt="" style="background:brown">
                            <img src="" alt="" style="background:brown">
                            <img src="" alt="" style="background:brown">
                            <img src="" alt="" style="background:brown">

                        </div>
                        <div class='auction-images-group' style="background:white">
                            <img src="" alt="" style="background:brown">
                            <img src="" alt="" style="background:brown">
                            <img src="" alt="" style="background:brown">
                            <img src="" alt="" style="background:brown">

                        </div>
                    </div>
                </div>
            </div>

            <div class='page-row'>
                <div class='auction-page-col-1' style="background:red">
                <img src="" alt="">


                </div>
                <div class='auction-page-col-2' style="background:brown">
                <img src="" alt="">
                    <div>



                    </div>
                    <div>



                    </div>

                </div>
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