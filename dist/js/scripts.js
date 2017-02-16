(function() {
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

        initLazyLoad("img.tz-lazy[data-src]");
        initLazyDisplay("img.tz-lazy-display");
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

    function initLazyDisplay(query) {
        if (document.querySelectorAll(query).length > 0) {
            window.addEventListener("load", checkViewport);
            window.addEventListener("resize", checkViewport);
            window.addEventListener("scroll", checkViewport);
        }

        function checkViewport() {
            var img, imgs = document.querySelectorAll(query + ":not(.display)");
            if (imgs.length > 0) {
                [].forEach.call(imgs, function(img) {
                    var rect = img.getBoundingClientRect();
                    if ((rect.bottom >=0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) ||
                    rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
                        img.classList.add("display");
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
                                console.log("image loaded 2");
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

    function initContactAnimation() {
        var cancelButton = document.getElementById("tz-contact-cancel"),
        contactButton = document.getElementById("tz-contact-me"),
        contactContainer = document.getElementById("tz-contact"),
        dhButtons,
        helloContainer = document.getElementById("tz-header"),
        i;

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

                dhButtons = document.querySelectorAll(".tz-contact-button.animate");
                if (dhButtons) {
                    for (i = 0; i < dhButtons.length; i++) {
                        setDirectionalHoverButton(dhButtons[i]);
                        dhButtons[i].classList.remove("animate");
                    }
                }

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

    function swapClass(el, class1, class2) {
        if (el.classList.contains(class1)) {
            el.classList.add(class2);
            el.classList.remove(class1);
        }
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



})();

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.0.2
 */

(function(){"use strict";function lib$es6$promise$utils$$objectOrFunction(x){return typeof x==="function"||typeof x==="object"&&x!==null}function lib$es6$promise$utils$$isFunction(x){return typeof x==="function"}function lib$es6$promise$utils$$isMaybeThenable(x){return typeof x==="object"&&x!==null}var lib$es6$promise$utils$$_isArray;if(!Array.isArray){lib$es6$promise$utils$$_isArray=function(x){return Object.prototype.toString.call(x)==="[object Array]"}}else{lib$es6$promise$utils$$_isArray=Array.isArray}var lib$es6$promise$utils$$isArray=lib$es6$promise$utils$$_isArray;var lib$es6$promise$asap$$len=0;var lib$es6$promise$asap$$toString={}.toString;var lib$es6$promise$asap$$vertxNext;var lib$es6$promise$asap$$customSchedulerFn;var lib$es6$promise$asap$$asap=function asap(callback,arg){lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len]=callback;lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len+1]=arg;lib$es6$promise$asap$$len+=2;if(lib$es6$promise$asap$$len===2){if(lib$es6$promise$asap$$customSchedulerFn){lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush)}else{lib$es6$promise$asap$$scheduleFlush()}}};function lib$es6$promise$asap$$setScheduler(scheduleFn){lib$es6$promise$asap$$customSchedulerFn=scheduleFn}function lib$es6$promise$asap$$setAsap(asapFn){lib$es6$promise$asap$$asap=asapFn}var lib$es6$promise$asap$$browserWindow=typeof window!=="undefined"?window:undefined;var lib$es6$promise$asap$$browserGlobal=lib$es6$promise$asap$$browserWindow||{};var lib$es6$promise$asap$$BrowserMutationObserver=lib$es6$promise$asap$$browserGlobal.MutationObserver||lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;var lib$es6$promise$asap$$isNode=typeof process!=="undefined"&&{}.toString.call(process)==="[object process]";var lib$es6$promise$asap$$isWorker=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function lib$es6$promise$asap$$useNextTick(){return function(){process.nextTick(lib$es6$promise$asap$$flush)}}function lib$es6$promise$asap$$useVertxTimer(){return function(){lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush)}}function lib$es6$promise$asap$$useMutationObserver(){var iterations=0;var observer=new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);var node=document.createTextNode("");observer.observe(node,{characterData:true});return function(){node.data=iterations=++iterations%2}}function lib$es6$promise$asap$$useMessageChannel(){var channel=new MessageChannel;channel.port1.onmessage=lib$es6$promise$asap$$flush;return function(){channel.port2.postMessage(0)}}function lib$es6$promise$asap$$useSetTimeout(){return function(){setTimeout(lib$es6$promise$asap$$flush,1)}}var lib$es6$promise$asap$$queue=new Array(1e3);function lib$es6$promise$asap$$flush(){for(var i=0;i<lib$es6$promise$asap$$len;i+=2){var callback=lib$es6$promise$asap$$queue[i];var arg=lib$es6$promise$asap$$queue[i+1];callback(arg);lib$es6$promise$asap$$queue[i]=undefined;lib$es6$promise$asap$$queue[i+1]=undefined}lib$es6$promise$asap$$len=0}function lib$es6$promise$asap$$attemptVertx(){try{var r=require;var vertx=r("vertx");lib$es6$promise$asap$$vertxNext=vertx.runOnLoop||vertx.runOnContext;return lib$es6$promise$asap$$useVertxTimer()}catch(e){return lib$es6$promise$asap$$useSetTimeout()}}var lib$es6$promise$asap$$scheduleFlush;if(lib$es6$promise$asap$$isNode){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useNextTick()}else if(lib$es6$promise$asap$$BrowserMutationObserver){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useMutationObserver()}else if(lib$es6$promise$asap$$isWorker){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useMessageChannel()}else if(lib$es6$promise$asap$$browserWindow===undefined&&typeof require==="function"){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$attemptVertx()}else{lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useSetTimeout()}function lib$es6$promise$$internal$$noop(){}var lib$es6$promise$$internal$$PENDING=void 0;var lib$es6$promise$$internal$$FULFILLED=1;var lib$es6$promise$$internal$$REJECTED=2;var lib$es6$promise$$internal$$GET_THEN_ERROR=new lib$es6$promise$$internal$$ErrorObject;function lib$es6$promise$$internal$$selfFulfillment(){return new TypeError("You cannot resolve a promise with itself")}function lib$es6$promise$$internal$$cannotReturnOwn(){return new TypeError("A promises callback cannot return that same promise.")}function lib$es6$promise$$internal$$getThen(promise){try{return promise.then}catch(error){lib$es6$promise$$internal$$GET_THEN_ERROR.error=error;return lib$es6$promise$$internal$$GET_THEN_ERROR}}function lib$es6$promise$$internal$$tryThen(then,value,fulfillmentHandler,rejectionHandler){try{then.call(value,fulfillmentHandler,rejectionHandler)}catch(e){return e}}function lib$es6$promise$$internal$$handleForeignThenable(promise,thenable,then){lib$es6$promise$asap$$asap(function(promise){var sealed=false;var error=lib$es6$promise$$internal$$tryThen(then,thenable,function(value){if(sealed){return}sealed=true;if(thenable!==value){lib$es6$promise$$internal$$resolve(promise,value)}else{lib$es6$promise$$internal$$fulfill(promise,value)}},function(reason){if(sealed){return}sealed=true;lib$es6$promise$$internal$$reject(promise,reason)},"Settle: "+(promise._label||" unknown promise"));if(!sealed&&error){sealed=true;lib$es6$promise$$internal$$reject(promise,error)}},promise)}function lib$es6$promise$$internal$$handleOwnThenable(promise,thenable){if(thenable._state===lib$es6$promise$$internal$$FULFILLED){lib$es6$promise$$internal$$fulfill(promise,thenable._result)}else if(thenable._state===lib$es6$promise$$internal$$REJECTED){lib$es6$promise$$internal$$reject(promise,thenable._result)}else{lib$es6$promise$$internal$$subscribe(thenable,undefined,function(value){lib$es6$promise$$internal$$resolve(promise,value)},function(reason){lib$es6$promise$$internal$$reject(promise,reason)})}}function lib$es6$promise$$internal$$handleMaybeThenable(promise,maybeThenable){if(maybeThenable.constructor===promise.constructor){lib$es6$promise$$internal$$handleOwnThenable(promise,maybeThenable)}else{var then=lib$es6$promise$$internal$$getThen(maybeThenable);if(then===lib$es6$promise$$internal$$GET_THEN_ERROR){lib$es6$promise$$internal$$reject(promise,lib$es6$promise$$internal$$GET_THEN_ERROR.error)}else if(then===undefined){lib$es6$promise$$internal$$fulfill(promise,maybeThenable)}else if(lib$es6$promise$utils$$isFunction(then)){lib$es6$promise$$internal$$handleForeignThenable(promise,maybeThenable,then)}else{lib$es6$promise$$internal$$fulfill(promise,maybeThenable)}}}function lib$es6$promise$$internal$$resolve(promise,value){if(promise===value){lib$es6$promise$$internal$$reject(promise,lib$es6$promise$$internal$$selfFulfillment())}else if(lib$es6$promise$utils$$objectOrFunction(value)){lib$es6$promise$$internal$$handleMaybeThenable(promise,value)}else{lib$es6$promise$$internal$$fulfill(promise,value)}}function lib$es6$promise$$internal$$publishRejection(promise){if(promise._onerror){promise._onerror(promise._result)}lib$es6$promise$$internal$$publish(promise)}function lib$es6$promise$$internal$$fulfill(promise,value){if(promise._state!==lib$es6$promise$$internal$$PENDING){return}promise._result=value;promise._state=lib$es6$promise$$internal$$FULFILLED;if(promise._subscribers.length!==0){lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish,promise)}}function lib$es6$promise$$internal$$reject(promise,reason){if(promise._state!==lib$es6$promise$$internal$$PENDING){return}promise._state=lib$es6$promise$$internal$$REJECTED;promise._result=reason;lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection,promise)}function lib$es6$promise$$internal$$subscribe(parent,child,onFulfillment,onRejection){var subscribers=parent._subscribers;var length=subscribers.length;parent._onerror=null;subscribers[length]=child;subscribers[length+lib$es6$promise$$internal$$FULFILLED]=onFulfillment;subscribers[length+lib$es6$promise$$internal$$REJECTED]=onRejection;if(length===0&&parent._state){lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish,parent)}}function lib$es6$promise$$internal$$publish(promise){var subscribers=promise._subscribers;var settled=promise._state;if(subscribers.length===0){return}var child,callback,detail=promise._result;for(var i=0;i<subscribers.length;i+=3){child=subscribers[i];callback=subscribers[i+settled];if(child){lib$es6$promise$$internal$$invokeCallback(settled,child,callback,detail)}else{callback(detail)}}promise._subscribers.length=0}function lib$es6$promise$$internal$$ErrorObject(){this.error=null}var lib$es6$promise$$internal$$TRY_CATCH_ERROR=new lib$es6$promise$$internal$$ErrorObject;function lib$es6$promise$$internal$$tryCatch(callback,detail){try{return callback(detail)}catch(e){lib$es6$promise$$internal$$TRY_CATCH_ERROR.error=e;return lib$es6$promise$$internal$$TRY_CATCH_ERROR}}function lib$es6$promise$$internal$$invokeCallback(settled,promise,callback,detail){var hasCallback=lib$es6$promise$utils$$isFunction(callback),value,error,succeeded,failed;if(hasCallback){value=lib$es6$promise$$internal$$tryCatch(callback,detail);if(value===lib$es6$promise$$internal$$TRY_CATCH_ERROR){failed=true;error=value.error;value=null}else{succeeded=true}if(promise===value){lib$es6$promise$$internal$$reject(promise,lib$es6$promise$$internal$$cannotReturnOwn());return}}else{value=detail;succeeded=true}if(promise._state!==lib$es6$promise$$internal$$PENDING){}else if(hasCallback&&succeeded){lib$es6$promise$$internal$$resolve(promise,value)}else if(failed){lib$es6$promise$$internal$$reject(promise,error)}else if(settled===lib$es6$promise$$internal$$FULFILLED){lib$es6$promise$$internal$$fulfill(promise,value)}else if(settled===lib$es6$promise$$internal$$REJECTED){lib$es6$promise$$internal$$reject(promise,value)}}function lib$es6$promise$$internal$$initializePromise(promise,resolver){try{resolver(function resolvePromise(value){lib$es6$promise$$internal$$resolve(promise,value)},function rejectPromise(reason){lib$es6$promise$$internal$$reject(promise,reason)})}catch(e){lib$es6$promise$$internal$$reject(promise,e)}}function lib$es6$promise$enumerator$$Enumerator(Constructor,input){var enumerator=this;enumerator._instanceConstructor=Constructor;enumerator.promise=new Constructor(lib$es6$promise$$internal$$noop);if(enumerator._validateInput(input)){enumerator._input=input;enumerator.length=input.length;enumerator._remaining=input.length;enumerator._init();if(enumerator.length===0){lib$es6$promise$$internal$$fulfill(enumerator.promise,enumerator._result)}else{enumerator.length=enumerator.length||0;enumerator._enumerate();if(enumerator._remaining===0){lib$es6$promise$$internal$$fulfill(enumerator.promise,enumerator._result)}}}else{lib$es6$promise$$internal$$reject(enumerator.promise,enumerator._validationError())}}lib$es6$promise$enumerator$$Enumerator.prototype._validateInput=function(input){return lib$es6$promise$utils$$isArray(input)};lib$es6$promise$enumerator$$Enumerator.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")};lib$es6$promise$enumerator$$Enumerator.prototype._init=function(){this._result=new Array(this.length)};var lib$es6$promise$enumerator$$default=lib$es6$promise$enumerator$$Enumerator;lib$es6$promise$enumerator$$Enumerator.prototype._enumerate=function(){var enumerator=this;var length=enumerator.length;var promise=enumerator.promise;var input=enumerator._input;for(var i=0;promise._state===lib$es6$promise$$internal$$PENDING&&i<length;i++){enumerator._eachEntry(input[i],i)}};lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry=function(entry,i){var enumerator=this;var c=enumerator._instanceConstructor;if(lib$es6$promise$utils$$isMaybeThenable(entry)){if(entry.constructor===c&&entry._state!==lib$es6$promise$$internal$$PENDING){entry._onerror=null;enumerator._settledAt(entry._state,i,entry._result)}else{enumerator._willSettleAt(c.resolve(entry),i)}}else{enumerator._remaining--;enumerator._result[i]=entry}};lib$es6$promise$enumerator$$Enumerator.prototype._settledAt=function(state,i,value){var enumerator=this;var promise=enumerator.promise;if(promise._state===lib$es6$promise$$internal$$PENDING){enumerator._remaining--;if(state===lib$es6$promise$$internal$$REJECTED){lib$es6$promise$$internal$$reject(promise,value)}else{enumerator._result[i]=value}}if(enumerator._remaining===0){lib$es6$promise$$internal$$fulfill(promise,enumerator._result)}};lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt=function(promise,i){var enumerator=this;lib$es6$promise$$internal$$subscribe(promise,undefined,function(value){enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED,i,value)},function(reason){enumerator._settledAt(lib$es6$promise$$internal$$REJECTED,i,reason)})};function lib$es6$promise$promise$all$$all(entries){return new lib$es6$promise$enumerator$$default(this,entries).promise}var lib$es6$promise$promise$all$$default=lib$es6$promise$promise$all$$all;function lib$es6$promise$promise$race$$race(entries){var Constructor=this;var promise=new Constructor(lib$es6$promise$$internal$$noop);if(!lib$es6$promise$utils$$isArray(entries)){lib$es6$promise$$internal$$reject(promise,new TypeError("You must pass an array to race."));return promise}var length=entries.length;function onFulfillment(value){lib$es6$promise$$internal$$resolve(promise,value)}function onRejection(reason){lib$es6$promise$$internal$$reject(promise,reason)}for(var i=0;promise._state===lib$es6$promise$$internal$$PENDING&&i<length;i++){lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]),undefined,onFulfillment,onRejection)}return promise}var lib$es6$promise$promise$race$$default=lib$es6$promise$promise$race$$race;function lib$es6$promise$promise$resolve$$resolve(object){var Constructor=this;if(object&&typeof object==="object"&&object.constructor===Constructor){return object}var promise=new Constructor(lib$es6$promise$$internal$$noop);lib$es6$promise$$internal$$resolve(promise,object);return promise}var lib$es6$promise$promise$resolve$$default=lib$es6$promise$promise$resolve$$resolve;function lib$es6$promise$promise$reject$$reject(reason){var Constructor=this;var promise=new Constructor(lib$es6$promise$$internal$$noop);lib$es6$promise$$internal$$reject(promise,reason);return promise}var lib$es6$promise$promise$reject$$default=lib$es6$promise$promise$reject$$reject;var lib$es6$promise$promise$$counter=0;function lib$es6$promise$promise$$needsResolver(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function lib$es6$promise$promise$$needsNew(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var lib$es6$promise$promise$$default=lib$es6$promise$promise$$Promise;function lib$es6$promise$promise$$Promise(resolver){this._id=lib$es6$promise$promise$$counter++;this._state=undefined;this._result=undefined;this._subscribers=[];if(lib$es6$promise$$internal$$noop!==resolver){if(!lib$es6$promise$utils$$isFunction(resolver)){lib$es6$promise$promise$$needsResolver()}if(!(this instanceof lib$es6$promise$promise$$Promise)){lib$es6$promise$promise$$needsNew()}lib$es6$promise$$internal$$initializePromise(this,resolver)}}lib$es6$promise$promise$$Promise.all=lib$es6$promise$promise$all$$default;lib$es6$promise$promise$$Promise.race=lib$es6$promise$promise$race$$default;lib$es6$promise$promise$$Promise.resolve=lib$es6$promise$promise$resolve$$default;lib$es6$promise$promise$$Promise.reject=lib$es6$promise$promise$reject$$default;lib$es6$promise$promise$$Promise._setScheduler=lib$es6$promise$asap$$setScheduler;lib$es6$promise$promise$$Promise._setAsap=lib$es6$promise$asap$$setAsap;lib$es6$promise$promise$$Promise._asap=lib$es6$promise$asap$$asap;lib$es6$promise$promise$$Promise.prototype={constructor:lib$es6$promise$promise$$Promise,then:function(onFulfillment,onRejection){var parent=this;var state=parent._state;if(state===lib$es6$promise$$internal$$FULFILLED&&!onFulfillment||state===lib$es6$promise$$internal$$REJECTED&&!onRejection){return this}var child=new this.constructor(lib$es6$promise$$internal$$noop);var result=parent._result;if(state){var callback=arguments[state-1];lib$es6$promise$asap$$asap(function(){lib$es6$promise$$internal$$invokeCallback(state,child,callback,result)})}else{lib$es6$promise$$internal$$subscribe(parent,child,onFulfillment,onRejection)}return child},"catch":function(onRejection){return this.then(null,onRejection)}};function lib$es6$promise$polyfill$$polyfill(){var local;if(typeof global!=="undefined"){local=global}else if(typeof self!=="undefined"){local=self}else{try{local=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var P=local.Promise;if(P&&Object.prototype.toString.call(P.resolve())==="[object Promise]"&&!P.cast){return}local.Promise=lib$es6$promise$promise$$default}var lib$es6$promise$polyfill$$default=lib$es6$promise$polyfill$$polyfill;var lib$es6$promise$umd$$ES6Promise={Promise:lib$es6$promise$promise$$default,polyfill:lib$es6$promise$polyfill$$default};if(typeof define==="function"&&define["amd"]){define(function(){return lib$es6$promise$umd$$ES6Promise})}else if(typeof module!=="undefined"&&module["exports"]){module["exports"]=lib$es6$promise$umd$$ES6Promise}else if(typeof this!=="undefined"){this["ES6Promise"]=lib$es6$promise$umd$$ES6Promise}lib$es6$promise$polyfill$$default()}).call(this);