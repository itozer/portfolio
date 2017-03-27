<!DOCTYPE html>
<html>
<head>
    <?php include("include/head.php");?>
</head>
<body>




<!--
    <a id="tz-contact-cancel" class="tz-contact-button tz-dh">
        <div class="tz-contact-button-wrapper tz-dh-bg-wrapper">
            <div class="tz-contact-button-image-wrapper tz-dh-bg">
                <p>Cancel</p>
            </div>
        </div>
        <div class="tz-contact-button-overlay-wrapper tz-dh-fg-wrapper">
            <div class="tz-contact-button-overlay tz-dh-fg"></div>
        </div>
    </a>
-->

<?php
    $page = "";
    include("include/header_top.php");
?>

    <div id="tz-header-wrapper">
        <section id="tz-header">
            <div class="tz-spacer"></div>
            <div id="tz-header-text-wrapper">
                <!--
                <h1>Hi!</h1>
                <h2>My name is <span id="tz-about-me" class="tz-inline tz-highlight">Isaac Tozer</span>. I'm a full stack web developer and interface designer. I like to make things people interact with. Take a look at some of my recent projects. <span id="tz-contact-me" class="tz-inline tz-highlight">Contact</span> me.</h2>
            -->
                <h1>Isaac Tozer</h1>
                <h2>Hi. I'm a full stack web developer and interface designer. I like to make things people interact with. Take a look at some of my recent projects.</h2>

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


                    <a id="tz-contact-cancel" class="tz-contact-button tz-dh animate">
                        <div class="tz-contact-button-wrapper tz-dh-bg-wrapper">
                            <div class="tz-contact-button-image-wrapper tz-dh-bg">
                                <!--<div class="tz-contact-button-image"></div>-->
                                <p>Cancel</p>
                            </div>
                        </div>
                        <div class="tz-contact-button-overlay-wrapper tz-dh-fg-wrapper">
                            <div class="tz-contact-button-overlay tz-dh-fg"></div>
                        </div>
                    </a>

                    <a id="tz-contact-send" class="tz-contact-button tz-dh animate">
                        <div class="tz-contact-button-wrapper tz-dh-bg-wrapper">
                            <div class="tz-contact-button-image-wrapper tz-dh-bg">
                                <!--<div class="tz-contact-button-image"></div>-->
                                <p>Send</p>
                            </div>
                        </div>
                        <div class="tz-contact-button-overlay-wrapper tz-dh-fg-wrapper">
                            <div class="tz-contact-button-overlay tz-dh-fg"></div>
                        </div>
                    </a>

                <!--
                    <div id="tz-send-contact" class="tz-contact-button tz-directional-button">
                        <div class="tz-contact-button-image"></div><p>Send</p>
                        <div class="tz-directional-button-overlay"></div>
                    </div>
                    <div id="tz-cancel-contact" class="tz-contact-button tz-directional-button">
                        <div class="tz-contact-button-image"></div><p>Cancel</p>
                        <div class="tz-directional-button-overlay"></div>
                    </div>
                -->

                </div>
                <div style="clear: both;"></div>
            </div>
            <div class="tz-spacer"></div>
        </section>
    </div>

    <section id="tz-projects">

        <a class="tz-project tz-dh" href="cresprint">
            <div class="tz-project-image-wrapper tz-dh-bg-wrapper">
                <img src="images/blank.gif" class="tz-project-image tz-lazy tz-dh-bg" data-src="images/project_thumbs/545x338/cresprint_s.png" width="545" height="338" alt="cresprint">
            </div>
            <div class="tz-description-wrapper tz-dh-fg-wrapper">
                <div class="tz-description tz-dh-fg">
                    <h3>CresPrint</h3>
                    <p>A fully customizable web to print solution</p>
                </div>
            </div>
        </a>

        <a class="tz-project tz-dh" href="crespro">
            <div class="tz-project-image-wrapper tz-dh-bg-wrapper">
                <img src="images/blank.gif" class="tz-project-image tz-lazy tz-dh-bg" data-src="images/project_thumbs/545x338/crespro_s.png" width="545" height="338" alt="crespro">
            </div>
            <div class="tz-description-wrapper tz-dh-fg-wrapper">
                <div class="tz-description tz-dh-fg">
                    <h3>CresPro</h3>
                    <p>The most comprehensive planned gifts marketing package available</p>
                </div>
            </div>
        </a>

        <a class="tz-project tz-dh" href="cresadmin">
            <div class="tz-project-image-wrapper tz-dh-bg-wrapper">
                <img src="images/blank.gif" class="tz-project-image tz-lazy tz-dh-bg" data-src="images/project_thumbs/545x338/cresadmin_s.png" width="545" height="338" alt="cresadmin">
            </div>
            <div class="tz-description-wrapper tz-dh-fg-wrapper">
                <div class="tz-description tz-dh-fg">
                    <h3>CresAdmin</h3>
                    <p>Easily organize and simplify administration of charitable gift annuities</p>
                </div>
            </div>
        </a>

        <a class="tz-project tz-dh" href="petdentalapp">
            <div class="tz-project-image-wrapper tz-dh-bg-wrapper">
                <img src="images/blank.gif" class="tz-project-image tz-lazy tz-dh-bg" data-src="images/project_thumbs/545x338/pet_dental.jpg" width="545" height="338" alt="petdental">
            </div>
            <div class="tz-description-wrapper tz-dh-fg-wrapper">
                <div class="tz-description tz-dh-fg">
                    <h3>PetDental</h3>
                    <p>
                        PetDental is an iPhone app designed to help you improve the health of your dogs or cats teeth and gums with the assistance of a professional veterinarian
                    </p>
                </div>
            </div>
        </a>

        <a class="tz-project tz-dh" href="skydump">
            <div class="tz-project-image-wrapper tz-dh-bg-wrapper">
                <img src="images/blank.gif" class="tz-project-image tz-lazy tz-dh-bg" data-src="images/project_thumbs/545x338/skydump.png" width="545" height="338" alt="skydump">
            </div>
            <div class="tz-description-wrapper tz-dh-fg-wrapper">
                <div class="tz-description tz-dh-fg">
                    <h3>SkyDump</h3>
                    <p>Check your office bathrooms availability before walking over there</p>
                </div>
            </div>
        </a>

<!--
        <a class="tz-project tz-dh" href="grapestomp">
            <div class="tz-project-image-wrapper tz-dh-bg-wrapper">
                <img src="images/blank.gif" class="tz-project-image tz-lazy tz-dh-bg" data-src="images/project_thumbs/545x338/grape_stomp.jpg" width="545" height="338" alt="grapestomp">
            </div>
            <div class="tz-description-wrapper tz-dh-fg-wrapper">
                <div class="tz-description tz-dh-fg">
                    <h3>The Great Grape Stomp</h3>
                    <p>Custom wine making event and hosting</p>
                </div>
            </div>
        </a>
-->

        <a class="tz-project tz-dh" href="dinoghosts">
            <div class="tz-project-image-wrapper tz-dh-bg-wrapper">
                <img src="images/blank.gif" class="tz-project-image tz-lazy tz-dh-bg" data-src="images/project_thumbs/545x338/dinosaur_ghosts.png" width="545" height="338" alt="dinosaur ghosts">
            </div>
            <div class="tz-description-wrapper tz-dh-fg-wrapper">
                <div class="tz-description tz-dh-fg">
                    <h3>Dinosaur Ghosts</h3>
                    <p>Why isn't this a thing?! Someone make the movie already</p>
                </div>
            </div>
        </a>


    </section>

</body>
</html>
