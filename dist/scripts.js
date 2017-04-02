var tz = (function() {
    "use strict";

    var cursorDirection = {};
    cursorDirection.degree = 0;

    function ready(fn) {
        if (document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    ready(function() {
        var dhButtons, dhElements, i;

        initContactForm();
        initLazyLoad("img.tz-lazy[data-src]");
        //initLazyDisplay("img.tz-lazy-display");
        initLazyDisplay("tz-lazy-display");
        initNavigationAnimation();
        initPetdentalCarausel();

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

        /*
        preloadImages([].slice.call(document.querySelectorAll(".tz-project-wrapper img[data-src]")).map(function(el) {
             return el.getAttribute("data-src")
         }));
         */


        dhElements = document.querySelectorAll(".tz-project");
        //dhButtons = document.querySelectorAll(".tz-contact-button");
        if (isTouchDevice()) {
        //if (true) {
            for (i = 0; i < dhElements.length; i++) {
                setInfoButton(dhElements[i]);
            }
        } else {
            for (i = 0; i < dhElements.length; i++) {
                setDirectionalHover(dhElements[i]);
            }
            /*
            for (i = 0; i < dhButtons.length; i++) {
                setDirectionalHoverButton(dhButtons[i]);
            }
            */
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
        });
    }


    function setDirectionalHoverButton(el) {
        el.addEventListener("mouseenter", function(e) {
            var fg = this.querySelector(".tz-dh-fg");
            var fgWrapper = this.querySelector(".tz-dh-fg-wrapper");
            var bg = this.querySelector(".tz-dh-bg");
//console.log("mouseenter");
            fg.classList.add("no-transition");
            //translateCoords(fg, cursorDirection.directionX * -180, cursorDirection.directionY * -50);
            translateCoords(fg, cursorDirection.directionX * -80, cursorDirection.directionY * -20);

            //setGradient(fgWrapper, cursorDirection.degree, "rgba(0,23,38,0.9)", "rgba(0,23,38,0.9)", "rgba(0,23,38,0.8)");

            setTimeout(function() {
                fg.classList.add("hover");
                bg.classList.add("hover");
                fg.classList.remove("no-transition");
                translateCoords(fg, 0, 0);
            }, 50);
        }),
        el.addEventListener("mouseleave", function(e) {
            var fg = this.querySelector(".tz-dh-fg");
            var bg = this.querySelector(".tz-dh-bg");
//console.log("mouseleave");
            setTimeout(function() {
                fg.classList.remove("hover");
                bg.classList.remove("hover");
            }, 50);
            //translateCoords(fg, cursorDirection.directionX * 180, cursorDirection.directionY * 50);
            translateCoords(fg, cursorDirection.directionX * 80, cursorDirection.directionY * 20);
        });
    }

    function initContactForm() {
        var contactLink = document.getElementById("tz-contact-link"),
        contactSubmit = document.getElementById("tz-contact-submit"),
        form = document.getElementById("tz-contact"),
        overlay = document.getElementById("tz-contact-overlay");

        form.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
        });

        window.addEventListener("click", function() {
            hideForm(form, overlay);
        });

        contactLink.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleFormDisplay();
        });

        contactSubmit.addEventListener("click", function() {
            validateForm(function(validation) {
                if (validation.valid) {
                    //verify with google this is not skynet
                    grecaptcha.execute();
                }
            });
        });

        function toggleFormDisplay() {
            if (form.classList.contains("display")) {
                //hide
                hideForm(form, overlay);
            } else {
                //display
                form.classList.add("display");
                overlay.classList.add("display");
                setFocus(document.getElementById("tz-contact-name"));
                setTimeout(function() {
                    overlay.classList.add("fadeIn");
                    form.classList.add("fadeIn");
                },10);
            }
        }

        function validateForm(cb) {
            var email = document.getElementById("tz-contact-email"),
            message = document.getElementById("tz-contact-message"),
            name = document.getElementById("tz-contact-name"),
            rtn = true;

            if (message.value.trim().length <= 0) {
                message.classList.add("invalid");
                setFocus(message);
                rtn = false;
            } else {
                message.classList.remove("invalid");
            }

            if (!validateEmail(email.value)) {
                email.classList.add("invalid");
                setFocus(email);
                rtn = false;
            } else {
                email.classList.remove("invalid");
            }

            if (name.value.trim().length <= 0) {
                name.classList.add("invalid");
                setFocus(name);
                rtn = false;
            } else {
                name.classList.remove("invalid");
            }

            cb({valid: rtn, name: name.value.trim(), email: email.value, message: message.value.trim()});
        }

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        function setFocus(el) {
            el.focus()
            el.setSelectionRange(0, el.value.length);
        }

    }

    function hideForm(form, overlay) {
        form.classList.remove("fadeIn");
        overlay.classList.remove("fadeIn");
        setTimeout(function() {
            form.classList.remove("display");
            overlay.classList.remove("display");
        },300);
    }

    function initLazyDisplay(query) {
        if (document.querySelectorAll("img." + query).length > 0) {
            window.addEventListener("load", checkViewport);
            window.addEventListener("resize", checkViewport);
            window.addEventListener("scroll", checkViewport);
        }

        function checkViewport() {
            var img, imgs = document.querySelectorAll("img." + query + ":not(.display)"), secondaries;
            if (imgs.length > 0) {
                [].forEach.call(imgs, function(img) {
                    var rect = img.getBoundingClientRect();
                    if ((rect.bottom >=0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) ||
                    rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
                        img.classList.add("display");
                        //also show any secondary elements
                        secondaries = img.parentNode.querySelectorAll("." + query + "-secondary");
                        [].forEach.call(secondaries, function(el) {
                            el.classList.add("display");
                        });
                    }
                });
            } else {
                window.removeEventListener("load", checkViewport);
                window.removeEventListener("resize", checkViewport);
                window.removeEventListener("scroll", checkViewport);
            }
        }
    }

    //waits to request images until the image container is in the viewport
    function initLazyLoad(query) {
        //lazyLoadImages();
        if (document.querySelectorAll(query).length > 0) {
            window.addEventListener("load", lazyLoadImages);
            window.addEventListener("resize", lazyLoadImages);
            window.addEventListener("scroll", lazyLoadImages);
        }

        function lazyLoadImages(load) {
            var img, imgs = document.querySelectorAll(query);
//console.log(imgs);
//console.log(imgs.length);
            // load images that have entered the viewport
            [].forEach.call(imgs, function(img) {
                if (isInViewport(img, 0)) {
                    /*
                    if (img.getAttribute("src")) {
//console.log("already has a src");
                        img.classList.add("display");
                    } else {
                    */
                        img.onload = function() {
                            var that = this;
                            setTimeout(function() {
                                //console.log("image loaded 2");
                                that.classList.add("display");
                            }, Math.random() * 250)
                        }
                        img.setAttribute("src",img.getAttribute("data-src"));
                    //}
                    img.removeAttribute("data-src")
                }
            });
            // if all the images are loaded, stop calling the handler
            if (imgs.length === 0) {
                window.removeEventListener("load", lazyLoadImages);
                window.removeEventListener("resize", lazyLoadImages);
                window.removeEventListener("scroll", lazyLoadImages);
            }
        }
    }

    function initNavigationAnimation() {
        //var logo = document.querySelector("#tz-logo img"),
        var logo = document.getElementById("tz-logo"),
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

    function initPetdentalCarausel() {
        var backgroundPosition, carausel, debounce, distance, nextButton, numSlides, previousButton, slideNumber;

        carausel = document.getElementById("tz-petdental-carausel-wrapper");
        if (carausel) {
            distance = 25.0;
            slideNumber = 1;
            numSlides = 5;
            nextButton = document.getElementById("tz-petdental-carausel-next");
            previousButton = document.getElementById("tz-petdental-carausel-previous");
            debounce = false;

            nextButton.addEventListener("click", function() {
                    if (slideNumber < numSlides && !debounce) {
                        setDebounce();
                        slideNumber += 1;
                        setButtonState();
                        backgroundPosition = window.getComputedStyle(carausel,null).backgroundPosition.trim().split(/\s+/)
                        carausel.style.backgroundPosition = "" + (parseFloat(backgroundPosition[0]) + distance) + "% 0";
                    }
            });

            previousButton.addEventListener("click", function() {
                    if (slideNumber > 1 && !debounce) {
                        setDebounce();
                        slideNumber-= 1;
                        setButtonState();
                        backgroundPosition = window.getComputedStyle(carausel,null).backgroundPosition.trim().split(/\s+/)
                        carausel.style.backgroundPosition = "" + (parseFloat(backgroundPosition[0]) - distance) + "% 0";
                    }
            });

            function setDebounce() {
                debounce = !debounce;
                setTimeout(function() {
                    debounce = !debounce;
                },410);
            }

            function setButtonState() {
//console.log("setButtonState");
//console.log(slideNumber);
                if (slideNumber === 1) {
                    previousButton.classList.add("disabled");
                } else if (slideNumber === numSlides) {
                    nextButton.classList.add("disabled");
                } else {
                    previousButton.classList.remove("disabled");
                    nextButton.classList.remove("disabled");
                }

            }
        }
    }

    function swapClass(el, class1, class2) {
        el.classList.add(class2);
        el.classList.remove(class1);
    }

    function isInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            (rect.bottom >=0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) ||
            rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
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

    return {
        hideForm: hideForm
    }

})();

//recaptcha callback
function submitForm(captchaResponse) {
console.log("submitForm");
    var http, url, params, validation = {};
    var email = document.getElementById("tz-contact-email"),
        form = document.getElementById("tz-contact"),
        message = document.getElementById("tz-contact-message"),
        name = document.getElementById("tz-contact-name"),
        overlay = document.getElementById("tz-contact-overlay");

    validation.response = captchaResponse;
    validation.secret = "6LekIRsUAAAAAOLcfUpjb3h3wFzS-azLwstSdFV7   ";
    validation.email = email.value,
    validation.message = message.value,
    validation.name = name.value,
    http = new XMLHttpRequest();
    //url = "contactform.php";
    url = "https://www.isaactozer.com/contactform";
    params = Object.keys(validation).map(function(key) {
        return key + '=' + encodeURIComponent(validation[key]);
    }).join('&');

    http.open("POST", url, true);
console.log("after open submitForm");

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {
        var response;
console.log("state change");
        if(http.readyState == 4 && http.status == 200) {
console.log(http.responseText);
            response = JSON.parse(http.responseText);
            if (response.success) {
                alert("Thanks for the message!");
                grecaptcha.reset();
                email.value = "";
                message.value = "";
                name.value = "";
                tz.hideForm(form, overlay);

            } else {
                alert("Ooops. There was an error sending your message. Please try again.")
                tz.hideForm(form, overlay);
            }
        }
    }
console.log("before send");
    http.send(params);
console.log("after send");

}
