    
    // init controller
    var controller = new ScrollMagic.Controller();

    /*IN AN OCEAN NEAR YOU...*/
    // build scene
    new ScrollMagic.Scene({
                        triggerElement: "#trigger1",
                        triggerHook: 0.7, // show, when scrolled 20% into view
                        duration: "60%", // hide 10% before exiting view (60% + 40% from bottom)
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

