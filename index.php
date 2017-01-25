<!DOCTYPE html>
<html>
<head>
    <?php include("include/head.php");?>
</head>
<body>



    <div class="tz-directional-button">
        <div class="tz-directional-button-wrapper">
            <div class="tz-contact-button-image"></div><p>Cancel</p>
        </div>
        <div class="tz-directional-button-overlay-wrapper">
            <div class="tz-directional-button-overlay"></div>
        </div>
    </div>


    <div id="tz-header-top-line"></div>

    <div id="tz-header-wrapper">
        <section id="tz-header">
            <div class="tz-spacer"></div>
            <div id="tz-header-text-wrapper">
                <h1>Hi!</h1>
                <h2>My name is <span id="tz-about-me" class="tz-inline tz-highlight">Isaac Tozer</span>. I'm a full stack web developer and interface designer. I like to make things people interact with. Take a look at some of my recent projects. <span id="tz-contact-me" class="tz-inline tz-highlight">Contact</span> me.</h2>
            </div>
            <div class="tz-spacer"></div>
        </section>

        <section id="tz-contact" style="left: -9999px;">
            <div class="tz-spacer"></div>
            <div id="tz-header-contact-wrapper">
                <div id="tz-contact-group-1" class="tz-contact-group">
                    <input type="text" name="name" placeholder="Name">
                    <input type="text" name="email" placeholder="Email">
                </div>
                <div id="tz-contact-group-2" class="tz-contact-group">
                    <textarea name="message" placeholder="Message"></textarea>
                </div>
                <div style="clear: both;"></div>
                <div id="tz-contact-actions">
                    <div id="tz-send-contact" class="tz-contact-button tz-directional-button">
                        <div class="tz-contact-button-image"></div><p>Send</p>
                        <div class="tz-directional-button-overlay"></div>
                    </div>
                    <div id="tz-cancel-contact" class="tz-contact-button tz-directional-button">
                        <div class="tz-contact-button-image"></div><p>Cancel</p>
                        <div class="tz-directional-button-overlay"></div>
                    </div>





                </div>
                <div style="clear: both;"></div>
            </div>
            <div class="tz-spacer"></div>
        </section>
    </div>

    <section id="tz-projects">

        <a class="tz-project" href="cresprint.php">
            <div class="tz-project-image-wrapper">
                <!--<img class="tz-project-image" src="images/cresprint.png" width="813px" height="504px">-->
                <img class="tz-project-image tz-lazy" data-src="images/project_thumbs/813x504/cresprint.png" width="813px" height="504px">
            </div>
            <div class="tz-description-wrapper">
                <div class="tz-description">
                    <h3>CresPrint</h3>
                    <p>A fully customizable web to print solution</p>
                </div>
            </div>
        </a>

        <a class="tz-project" href="crespro.php">
            <div class="tz-project-image-wrapper">
                <!--<img class="tz-project-image" src="images/crespro.png" width="813px" height="504px">-->
                <img class="tz-project-image tz-lazy" data-src="images/project_thumbs/813x504/crespro.png" width="813px" height="504px">
            </div>
            <div class="tz-description-wrapper">
                <div class="tz-description">
                    <h3>CresPro</h3>
                    <p>The most comprehensive planned gifts marketing package available</p>
                </div>
            </div>
        </a>

        <a class="tz-project" href="cresadmin.php">
            <div class="tz-project-image-wrapper">
                <img class="tz-project-image tz-lazy" data-src="images/project_thumbs/813x504/cresadmin.png" width="813px" height="504px">
            </div>
            <div class="tz-description-wrapper">
                <div class="tz-description">
                    <h3>CresAdmin</h3>
                    <p>Easily organize and simplify administration of charitable gift annuities</p>
                </div>
            </div>
        </a>

        <a class="tz-project" href="petdental.php">
            <div class="tz-project-image-wrapper">
                <!--<img class="tz-project-image" src="images/pet_dental.png" width="813px" height="504px">-->
                <img class="tz-project-image tz-lazy" data-src="images/project_thumbs/813x504/pet_dental.png" width="813px" height="504px">
            </div>
            <div class="tz-description-wrapper">
                <div class="tz-description">
                    <h3>PetDental</h3>
                    <p>
                        PetDental is an iPhone app designed to help you improve the health of your dogs or cats teeth
                        and gums with the help of a professional veterinarian
                    </p>
                </div>
            </div>
        </a>

        <a class="tz-project" href="skydump.php">
            <div class="tz-project-image-wrapper">
                <!--<img class="tz-project-image" src="images/skydump.png" width="813px" height="504px">-->
                <img class="tz-project-image tz-lazy" data-src="images/project_thumbs/813x504/skydump.png" width="813px" height="504px">
            </div>
            <div class="tz-description-wrapper">
                <div class="tz-description">
                    <h3>SkyDump</h3>
                    <p>Never wait in line for the bathroom again</p>
                </div>
            </div>
        </a>


        <a class="tz-project" href="grapestomp.php">
            <div class="tz-project-image-wrapper">
                <!--<img class="tz-project-image" src="images/grape_stomp.png" width="813px" height="504px">-->
                <img class="tz-project-image tz-lazy" data-src="images/project_thumbs/813x504/grape_stomp.png" width="813px" height="504px">
            </div>
            <div class="tz-description-wrapper">
                <div class="tz-description">
                    <h3>The Great Grape Stomp</h3>
                    <p>Custom wine making event and hosting</p>
                </div>
            </div>
        </a>


    </section>

</body>
</html>
