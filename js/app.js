var controller = new ScrollMagic.Controller();
 
new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        triggerHook: "onLeave",
    })
    .setPin("#slidein2")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

	var fromLeftTimeline = new TimelineMax();
	var fromLeftFrom = TweenMax.from("#left", 1, {
    	x: -1300
	});
	var fromLeftTo = TweenMax.to("#left", 1, {
    	x: 0
	});
	fromLeftTimeline
    	.add(fromLeftFrom)
    	.add(fromLeftTo);

new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        offset: 700,
    })
    .setTween(fromLeftTimeline)
    .duration(600)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// Fade in
var fadeInTimeline = new TimelineMax();
var fadeInFrom = TweenMax.from("#opacity", 1, {
    autoAlpha: 0
});
var fadeInTo = TweenMax.to("#opacity", 1, {
    autoAlpha: 1
});
fadeInTimeline
    .add(fadeInFrom)
    .add(fadeInTo);
 
new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        offset: 500,
    })
    .setTween(fadeInTimeline)
    .duration(800)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
 
//Fly in from the left
var fromBottomTimeline = new TimelineMax();
var fromBottomFrom = TweenMax.from("#bottom", 1, {
    y: 300
});
var fromBottomTo = TweenMax.to("#bottom", 1, {
    y: 0
});
fromBottomTimeline
    .add(fromBottomFrom)
    .add(fromBottomTo);
 
new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        offset: 800,
    })
    .setTween(fromBottomTimeline)
    .duration(400)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);   



    // Fade in
var fadeInTimeline = new TimelineMax();
var fadeInFrom = TweenMax.from("#opacity2", 1, {
    autoAlpha: 0
});
var fadeInTo = TweenMax.to("#opacity2", 1, {
    autoAlpha: 1
});
fadeInTimeline
    .add(fadeInFrom)
    .add(fadeInTo);
 
new ScrollMagic.Scene({
        triggerElement: "#slidein3",
        offset: 125,
    })
    .setTween(fadeInTimeline)
    .duration(300)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
 

var fadeInTimeline = new TimelineMax();
var fadeInFrom = TweenMax.from("#opacity2", 1, {
    autoAlpha: 0
});
var fadeInTo = TweenMax.to("#opacity2", 1, {
    autoAlpha: 1
});
fadeInTimeline
    .add(fadeInFrom)
    .add(fadeInTo);
new ScrollMagic.Scene({
        triggerElement: "#slidein3",
        offset: 1100,
    })
    .setTween(fadeInTimeline)
    .duration(1000)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);