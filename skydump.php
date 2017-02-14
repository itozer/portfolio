<!DOCTYPE html>
<html>
<head>
    <?php include("include/head.php");?>
</head>
<body>

    <?php
        $page = "SkyDump";
        include("include/secondary_navigation.php");
    ?>

    <section id="tz-secondary-header">
        <h3>SkyDump</h3>
        <p>
            Walking to the bathroom only to find out its currently occupied sucks. Sometimes you REALLY have to go. SkyDump tells you what bathrooms are available in your office before you get up, so that you don't have to walk around looking for one that is free. You can check out a demo of the app <a href="http://skydump.info" target="_blank">here</a>, or below.
        </p>
    </section>


        <section id="tz-project-skydump" class="tz-project-wrapper">

            <div class="tz-project-screen">
                <div id="tz-skydump-wrapper" class="tz-project-screen-wrapper">
                    <iframe src="http://skydump.info"></iframe>
                    <!--<iframe src="http://localhost:3000/"></iframe>-->
                </div>
            </div>

            <p>SkyDump uses a Raspberry Pi and magnetic sensors to detect when a bathroom is <span style="color: #02a651;">available</span> or <span style="color: #d81b00;">occuiped</span>. It then updates the web app to let everyone know.</p>

            <div class="tz-project-screen">
                <div class="tz-project-screen-wrapper">
                    <img data-src="images/projects/skydump/skydump_1_s.png" class="tz-lazy" width="1100px" height="800px" alt="skydump1">
                </div>
            </div>


        </section>


</body>
</html>
