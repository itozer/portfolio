<!DOCTYPE html>
<html>
<head>
    <?php include("include/head.php"); ?>
    <script>
        // This is the URL of the video you want to load
        var videoUrl = 'http://www.vimeo.com/199090987';
        // This is the oEmbed endpoint for Vimeo (we're using JSON)
        // (Vimeo also supports oEmbed discovery. See the PHP example.)
        var endpoint = 'http://www.vimeo.com/api/oembed.json';
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
        include("include/secondary_navigation.php");
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
                <!--<img data-src="images/projects/cresprint/cresprint_1_s.png" class="tz-lazy hide" width="1300px" height="800px" alt="cresprint1">-->
                <img data-src="images/projects/cresprint/cresprint_1.jpg" class="tz-fade-up" width="1300px" height="800px" alt="cresprint1">
                <!--<img src="images/projects/cresprint/cresprint_1.jpg" class="tz-fade-up" width="1300px" height="800px" alt="cresprint1">-->
            </div>
        </div>

        <p>Watch the short video below for a demonstration of the CresPrint software in action.</p>

        <div class="tz-project-screen">
            <div id="tz-project-video-wrapper">Loading video...</div>
        </div>

        <p>The screens below demonstrate text and image editing on a brief and brochure in the CresPrint Editor.</p>

        <div class="tz-project-screen">
            <div class="tz-project-screen-wrapper">
                <!--<img data-src="images/projects/cresprint/cresprint_2_s.png" class="tz-lazy" width="1300px" height="800px" alt="cresprint2">-->
                <img data-src="images/projects/cresprint/cresprint_2_s.png" class="tz-fade-up" width="1300px" height="800px" alt="cresprint2">
            </div>
        </div>

        <div class="tz-project-screen">
            <div class="tz-project-screen-wrapper">
                <!--<img data-src="images/projects/cresprint/cresprint_3_s.png" class="tz-lazy" width="1300px" height="800px" alt="cresprint3">-->
                <img data-src="images/projects/cresprint/cresprint_3_s.png" class="tz-fade-up" width="1300px" height="800px" alt="cresprint3">
            </div>
        </div>

    </section>

</body>
</html>
