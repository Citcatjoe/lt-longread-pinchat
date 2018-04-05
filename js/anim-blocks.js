jQuery(document).ready(function($) 
{
    var $animImg1 = $(".anim1-img1");
    var $animImg2 = $(".anim1-img2");
    var $animImg3 = $(".anim1-img3");

    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tlAnim1 = new TimelineMax()
        .set($animImg3, { scale: 0, transformOrigin: "center center" })
        .to($animImg1, 1, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($animImg2, 1, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($animImg3, 0.75, { autoAlpha: 1, scale: 1, ease: Back.easeOut.config(5) });

    // build scene
    var scene = new ScrollMagic.Scene({
        triggerElement: ".scene-stepped--figure",
        reverse: false
    })
        .setTween(tlAnim1)
        .triggerHook(0.7)
        .addIndicators({ name: "timeline" }) // add indicators (requires plugin)
        .addTo(controller);
});
