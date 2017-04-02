<section id="tz-navigation-wrapper">
    <div id="tz-header-top-line"></div>
    <div id="tz-bread-crumb">
        <div id="tz-bread-left">
            <!--<a href="http://www.isaactozer.com/" id="tz-go-home">-->
            <a href="index" id="tz-go-home">
                <img id="tz-logo" src="images/logo_50x50.png" width="42" height="42" alt="logo">
                <span>Isaac Tozer</span>
            </a>
                <?php
                    echo (strlen($page) > 0? "<span style='font-size: 0.8em; font-weight: 400; color: #555;'>&#187;</span> <span>" . $page . "</span>": "");
                ?>
        </div>
        <div id="tz-bread-right">
            <a id="tz-contact-link" class="unselectable">Contact</a>
            <a href="about">About</a>
        </div>

        <div id="tz-contact">

            <label for="name">Name:</label>
            <input type="text" id="tz-contact-name" name="name">

            <label for="email">Email:</label>
            <input type="text" id="tz-contact-email" name="email">

            <label for="subject">Message:</label>
            <textarea id="tz-contact-message" name="message" style="height:130px"></textarea>

            <button id="tz-contact-submit">Submit</button>

        </div>

    </div>
</section>
<div id="tz-navigation-shim"></div>
<div id="tz-contact-overlay"></div>
