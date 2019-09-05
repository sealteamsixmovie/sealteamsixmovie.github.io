    
    // init controller
    var controller = new ScrollMagic.Controller();

    /*IN AN OCEAN NEAR YOU...*/
    // build scene
    new ScrollMagic.Scene({
                        triggerElement: "#trigger1",
                        triggerHook: 0.7, // show, when scrolled 30% into view
                        duration: "80%", 
                        offset: 50 // move trigger to center of element
                    })
                    .setClassToggle("#reveal1", "visible") // add class to reveal
                    //.addIndicators() // add indicators (requires plugin)
                    .addTo(controller);



    // init controller
    var controller = new ScrollMagic.Controller();
    /*SAMMY LOGLINE*/
    // build scene
    new ScrollMagic.Scene({
                        triggerElement: "#trigger2",
                        triggerHook: 0.5,
                        offset: 50, // move trigger to center of element
                        reverse: true // only do once
                    })
                    .setClassToggle("#reveal2", "visible") // add class toggle
                    //.addIndicators() // add indicators (requires plugin)
                    .addTo(controller);


    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tween = TweenMax.to("#animate", 0.5, {scale: 1.5, repeat: 1, yoyo: true});

    // build scene and set duration to window height
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "100%"})
                    .setTween(tween)
                    //.addIndicators() // add indicators (requires plugin)
                    .addTo(controller);



    // init controller
    var controller = new ScrollMagic.Controller();

        // build scenes
        var revealElements = document.getElementsByClassName("digit");
        for (var i=0; i<revealElements.length; i++) { // create a scene for each element
            new ScrollMagic.Scene({
                                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                                offset: 50,                                              // start a little later
                                triggerHook: 0.7,
                            })
                            .setClassToggle(revealElements[i], "visible") // add class toggle
                            //.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                            .addTo(controller);
        }