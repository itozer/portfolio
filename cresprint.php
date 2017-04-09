<!DOCTYPE html>
<html>
<head>
    <?php include("include/head.php"); ?>
    <script>
        // This is the URL of the video you want to load
        var videoUrl = 'https://www.vimeo.com/199090987';
        // This is the oEmbed endpoint for Vimeo (we're using JSON)
        // (Vimeo also supports oEmbed discovery. See the PHP example.)
        var endpoint = 'https://www.vimeo.com/api/oembed.json';
        // Tell Vimeo what function to call
        var callback = 'embedVideo';
        // Put together the URL
        var url = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=1000&title=false&byline=false&portrait=false';
        // This function puts the video on the page
        function embedVideo(video) {
            document.getElementById('tz-project-video-wrapper').innerHTML = unescape(video.html);
        }
        // This function loads the data from Vimeo
        function init() {
            var js = document.createElement('script');
            js.setAttribute('type', 'text/javascript');
            js.setAttribute('src', url);
            document.getElementsByTagName('head').item(0).appendChild(js);
        }
        // Call our init function when the page loads
        window.onload = init;
    </script>
</head>
<body>

    <?php
        $page = "CresPrint";
        include("include/header_top.php");
    ?>

    <section id="tz-secondary-header">
        <h3>CresPrint</h3>
        <p>
            CresPrint is a fully customizable web to print solution. Literature pieces are automatically branded with client colors, logos, and fonts, and can be further edited to meet marketing needs. CresPrint produces a 300dpi full bleed PDF for professional offset printing. For more information, <a href="http://crescendointeractive.com/marketing/cresprint.html" target="_blank">click here</a>.
        </p>
    </section>

    <section id="tz-project-cresadmin" class="tz-project-wrapper">

        <div class="tz-project-screen">
            <div class="tz-project-screen-wrapper" >
                <img src="images/projects/cresprint/cresprint_1_s.jpg" class="tz-lazy-display" width="1300" height="800" alt="cresprint1">
            </div>
        </div>

        <p>Text can be easily edited and formatted.</p>

        <div class="tz-project-screen">
            <div class="tz-project-screen-wrapper">
                <img src="images/projects/cresprint/cresprint_2_s.png" class="tz-lazy-display" width="1300" height="800" alt="cresprint2">
            </div>
        </div>

        <p>Images can be replaced, repositioned, and resized. CresPrint ensures only images of at least 300DPI are used.</p>

        <div class="tz-project-screen">
            <div class="tz-project-screen-wrapper">
                <img src="images/projects/cresprint/cresprint_3_s.png" class="tz-lazy-display" width="1300" height="800" alt="cresprint3">
            </div>
        </div>

        <p>Watch the short video below for a software demonstration.</p>

        <div class="tz-project-screen">
            <div id="tz-project-video-wrapper">Loading video...</div>
        </div>

    </section>

</body>
</html>
