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
            I created SkyDump to save the office, and myself, a bit of time and frustration when nature calls. SkyDump tells you what bathrooms are available so that you don't have to walk around looking for one that is free. You can check out a demo of the app <a href="http://skydump.info" target="_blank">here</a>, or below.
        </p>
    </section>


        <section id="tz-project-skydump" class="tz-project-wrapper">

            <div class="tz-project-screen">
                <div id="tz-skydump-wrapper" class="tz-project-screen-wrapper">
                    <iframe src="http://skydump.info"></iframe>
                </div>
            </div>


            <p>SkyDump uses a Raspberry Pi and magnetic sensors to detect when a bathrooms state changes, and then updates the website to let everyone know.</p>

        </section>


</body>
</html>
