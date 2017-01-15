<!DOCTYPE html>
<html>
<head>
    <title>Isaac Tozer</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <script src="js/app.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/responsive.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400|Open+Sans:300,400,600" rel="stylesheet">
    <link rel="shortcut icon" href="images/favicon.ico" />
    <!--<link href="https://fonts.googleapis.com/css?family=Lato:400|Open+Sans:300" rel="stylesheet">-->
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
            document.getElementById('embed').innerHTML = unescape(video.html);
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

    <section id="tz-navigation-wrapper">
        <div id="tz-header-top-line"></div>
        <div id="tz-bread-crumb">
            <div id="tz-logo"><img src="images/logo_50x50.png" width="44px" height="44px" alt="logo"></div>
            <p><a href="http://www.isaactozer.com">Isaac Tozer</a> > CresPrint</p>
        </div>
    </section>

    <section id="tz-secondary-header">
        <h3>CresPrint</h3>
        <p>
            CresPrint is a fully customizable web to print solution. Literature pieces are automatically branded with client colors, logos, and fonts, and can be further edited to meet marketing needs. CresPrint produces a 300dpi full bleed PDF for professional offset printing. For more information, <a href="http://crescendointeractive.com/marketing/cresprint.html" target="_blank">click here</a>.
        </p>
    </section>

    <section id="tz-project-cresadmin" class="tz-project-wrapper">

        <div class="tz-project-screen">
            <div class="tz-project-screen-wrapper">
                <!--<img data-src="images/projects/cresprint/cresprint_1.png" class="tz-lazy hidden" alt="cresprint1">-->
                <img data-src="images/projects/cresprint/cresprint_1.png" class="tz-lazy" width="1100px" height="800px" alt="cresprint1">
            </div>
        </div>

        <p>Watch the short video below for a demonstration of the CresPrint software in action.</p>

        <!--
        <div class="tz-project-screen">
            <video width="1100" controls>
                <source src="images/projects/cresprint/cresprint_vid.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        -->

        <div class="tz-project-screen">
            <div id="embed">Loading video...</div>
        </div>

        <p>The screens below demonstrate text and image editing on a brief and brochure in the CresPrint Editor.</p>

        <div class="tz-project-screen">
            <div class="tz-project-screen-wrapper">
                <img data-src="images/projects/cresprint/cresprint_2.png" class="tz-lazy" width="1100px" height="800px" alt="cresprint2">
            </div>
        </div>

        <div class="tz-project-screen">
            <div class="tz-project-screen-wrapper">
                <img data-src="images/projects/cresprint/cresprint_3.png" class="tz-lazy" width="1100px" height="800px" alt="cresprint3">
            </div>
        </div>

    </section>

</body>
</html>
