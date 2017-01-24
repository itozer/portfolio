(function() {
    "use strict";

    var cursorDirection = {};

    initLazyLoad("img[data-src]");
    function ready(fn) {
        if (document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    ready(function() {
        var dhElements, i;

        initContactAnimation();
        initNavigationAnimation();
/************* temp *////////
        /*
        window.addEventListener("resize", function(e) {
            console.log("width: " + window.innerWidth || document.body.clientWidth);
        });
        window.addEventListener("touchstart", function(e) {
            console.log("touch start");
            console.log(e);
        });
        */

        //alert("is touch device: " + isTouchDevice());

/************* temp *////////

        //for page load speed... lets both preload and lazyload large thumb images
        preloadImages([].slice.call(document.querySelectorAll(".tz-project-wrapper img[data-src]")).map(function(el) {
             return el.getAttribute("data-src")
         }));


        dhElements = document.querySelectorAll(".tz-project");
        if (isTouchDevice()) {
        //if (true) {
            for (i = 0; i < dhElements.length; i++) {
                setInfoButton(dhElements[i]);
            }
        } else {
            for (i = 0; i < dhElements.length; i++) {
                setDirectionalHover(dhElements[i]);
            }
        }

        //track cursor movement
        document.addEventListener("mousemove", function(e) {
            if (cursorDirection.prevX && cursorDirection.prevY) {
                var x = e.pageX - cursorDirection.prevX,
                y = e.pageY - cursorDirection.prevY,
                a1 = Math.max(Math.abs(x), Math.abs(y)),
                a2 = x / a1,
                c = y / a1,
                thetaAngle = Math.atan2(-y, x),
                thetaDegree = Math.atan2(x, -y);

                cursorDirection.directionX = a2;
                cursorDirection.directionY = c;
                cursorDirection.angle = thetaAngle * 180 / Math.PI;
                cursorDirection.degree = thetaDegree * 180 / Math.PI; //used for css gradients
            }
            cursorDirection.prevX = e.pageX;
            cursorDirection.prevY = e.pageY;
        });
    });

    function isTouchDevice() {
        return ('ontouchstart' in window ||          // works on most browsers
        navigator.maxTouchPoints);                  // works on IE10/11 and Surface
    };

    function setInfoButton(el) {
        var infoWrapper = document.createElement("div"),
        text = el.querySelector(".tz-description"),
        bg = el.querySelector(".tz-description-wrapper");

        infoWrapper.setAttribute("class", "tz-info-wrapper");
        el.appendChild(infoWrapper);

        //pre-load close image
        preloadImages(["../images/close.png"]);

        //infoWrapper.addEventListener("mousedown", function(e) {
        infoWrapper.addEventListener("touchstart", function(e) {
            var that = this;
            e.preventDefault();
            e.stopPropagation();

            //i may want to unselect the others...
            //var active = document.querySelectorAll(".tz-info-wrapper.active");

            that.setAttribute("style", "width: 40px; height: 40px; bottom: 15px; right: 15px;");
            setTimeout(function() {
                that.setAttribute("style", "width: 50px; height: 50px");
                if (that.classList.contains("active")) {
                    that.classList.remove("active");
                    text.classList.remove("hover");
                    bg.style.opacity = "0.0";
                } else {
                    that.classList.add("active");
                    text.classList.add("hover");
                    setGradient(bg, 0, "rgba(0,23,38,0.9)", "rgba(0,23,38,0.9)", "rgba(0,23,38,0.8)");
                    bg.style.opacity = "1.0";
                    //translateCoords(text, cursorDirection.directionX * -30, cursorDirection.directionY * -30);
                }

                /*
                for (var i = 0; i < active.length; i++) {
                    active[i].classList.remove("active");
                    text.classList.remove("hover");
                    bg.style.opacity = "0.0";
                }
                */
            }, 120);
        });
    }

    function setDirectionalHover(el) {
        el.addEventListener("mouseenter", function(e) {
            var text = this.querySelector(".tz-description");
            var bg = this.querySelector(".tz-description-wrapper");
//console.log("mouseenter");
            text.classList.add("no-transition");
            translateCoords(text, cursorDirection.directionX * -30, cursorDirection.directionY * -30);

            setGradient(bg, cursorDirection.degree, "rgba(0,23,38,0.9)", "rgba(0,23,38,0.9)", "rgba(0,23,38,0.8)");
            //setGradient(document.getElementById("header-top-line"), cursorDirection.degree, "rgba(0,23,38,0.9)", "rgba(0,23,38,0.9)", "rgba(0,23,38,0.8)");
            //setGradient(document.getElementById("header-fat-line"), cursorDirection.degree, "rgba(239,239,239,1.0)", "rgba(239,239,239,1.0)", "rgba(239,239,239,0.3)");

            setTimeout(function() {
                text.classList.add("hover");
                text.classList.remove("no-transition");
                translateCoords(text, 0, 0);
            }, 50);
        }),
        el.addEventListener("mouseleave", function(e) {
            var text = this.querySelector(".tz-description");
//console.log("mouseleave");
            setTimeout(function() {
                text.classList.remove("hover");
            }, 50);
            translateCoords(text, cursorDirection.directionX * 30, cursorDirection.directionY * 30);
            //setGradient(document.getElementById("header-top-line"), cursorDirection.degree, "rgba(0,23,38,0.9)", "rgba(0,23,38,0.9)", "rgba(0,23,38,0.9)");
            //setGradient(document.getElementById("header-fat-line"), cursorDirection.degree, "rgba(239,239,239,1.0)", "rgba(239,239,239,1.0)", "rgba(239,239,239,1.0)");
        });
    }

    function initLazyLoad(query) {
        //lazyLoadImages();
        window.addEventListener("load", lazyLoadImages);
        window.addEventListener("resize", lazyLoadImages);
        window.addEventListener("scroll", lazyLoadImages);

        function lazyLoadImages(load) {
            var img, imgs = document.querySelectorAll(query);
//console.log(imgs);
//console.log(imgs.length);
            // load images that have entered the viewport
            [].forEach.call(imgs, function(img) {
                if (isInViewport(img, 0)) {
                    img.onload = function() {
                        var that = this;
                        setTimeout(function() {
                            console.log("image loaded 2");
                            //this.classList.remove("hidden");
                            that.classList.add("display");

                        }, Math.random() * 250)
                    }
                    img.setAttribute("src",img.getAttribute("data-src"));
                    img.removeAttribute("data-src")
                }
            });
            // if all the images are loaded, stop calling the handler
            if (imgs.length === 0) {
                window.removeEventListener("resize", lazyLoadImages);
                window.removeEventListener("scroll", lazyLoadImages);
            }
        }
    }

    function initContactAnimation() {
        var contactButton = document.getElementById("tz-contact-me"),
        contactContainer = document.getElementById("tz-contact"),
        helloContainer = document.getElementById("tz-header"),
        cancelButton = document.getElementById("tz-cancel-contact");

        if (helloContainer && contactButton) {
            contactButton.addEventListener("click", toggleContact);
            cancelButton.addEventListener("click", toggleContact);
        }

        function toggleContact() {
            var width = window.innerWidth || document.documentElement.clientWidth;
            if (helloContainer.classList.contains("hide")) {
                //show welcome text. hide contact form
                contactContainer.classList.add("hide");
                setPosition(contactContainer, -width, 0);

                helloContainer.classList.remove("hide");
                setPosition(helloContainer, 0, 0);
            } else {
                //show contact form. hide welcome text.
                helloContainer.classList.add("hide");
                setPosition(helloContainer, width, 0);

                contactContainer.classList.remove("hide");
                setPosition(contactContainer, 0, 0);
            }
        }
    }


    function initNavigationAnimation() {
        var logo = document.querySelector("#tz-logo img"),
        prevDirection = 0,
        prevY = 0,
        topLine = document.getElementById("tz-header-top-line");

        if (logo && topLine) {

            window.addEventListener("scroll", function(e) {
                var currentY = window.scrollY;
                var currentDirection = currentY - prevY < 0? -1: 1;

                if (currentDirection !== prevDirection) {
                    if (currentDirection < prevDirection) {
                        //up
                        //console.log("up");
                        topLine.classList.remove("hide");
                        logo.classList.remove("animateIn")
                    } else {
                        //down
                        //console.log("down");
                        topLine.classList.add("hide");
                        logo.classList.add("animateIn");
                    }
                    prevDirection = currentDirection;
                }

                prevY = currentY;
            });

        }
    }

    function isInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            (rect.bottom >=0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) ||
            rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight));
    }

    function translateCoords(el, x, y) {
        el.style.webkitTransform = "translate(" + x + "px," + y + "px)", el.style.msProperty = "translate(" + x + "px," + y + "px)", el.style.transform = "translate(" + x + "px," + y + "px)";
    };

    function setPosition(el, left, top) {
        el.style.left = left + "px";
        el.style.top = top + "px";
    }

    function scale(el, x, y) {
        el.style.webkitTransform = "scale(" + x + "," + y + ")", el.style.msProperty = "scale(" + x + "," + y + ")", el.style.transform = "scale(" + x + "," + y + ")";
    }

    function setGradient(el, deg, rgba1, rgba2, rgba3) {
        if (rgba3 === undefined) {
            el.style.background = "linear-gradient("+deg+"deg,"+rgba1+","+rgba2+")";
        } else {
            el.style.background = "linear-gradient("+deg+"deg,"+rgba1+","+rgba2+","+rgba3+")";
        }
    }

    function preloadImages(imgSrcs) {
        var i, img;

        for (i = 0; i < imgSrcs.length; i++) {
            img = new Image();
            img.src = imgSrcs[i];
        }
    }

})();
