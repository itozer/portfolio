<section id="tz-navigation-wrapper">
    <div id="tz-header-top-line"></div>
    <div id="tz-bread-crumb">
        <div id="tz-bread-left">
            <a href="http://isaactozer.com/">
                <img id="tz-logo" src="images/logo_50x50.png" width="42" height="42" alt="logo">
                <span>Isaac Tozer</span>
            </a>
                <?php
                    echo (strlen($page) > 0? "<span style='font-size: 0.8em; font-weight: 400; color: #555;'>&#187;</span> <span>" . $page . "</span>": "");
                ?>
        </div>
        <div id="tz-bread-right">
            <a href="contact">Contact</a>
            <a href="about">About</a>
        </div>
    </div>
</section>
<div id="tz-navigation-shim"></div>
