

var $heightWindow  = jQuery(window).height();
var $height_header = jQuery('.tz-header').height();
var $height_header3 = jQuery('.header3-fix').height();
var $nav3_height     = jQuery('.tznav-3').height();

jQuery(window).load(function(){

    "use strict";

    /* Method for parallax */
    if ( jQuery('.parallax').length ) {
        jQuery('.parallax').each(function(){
            jQuery(this).parallax("30%", 0.1);
        });
    }

    // jQuery for flexslider------------------
    // The slider being synced must be initialized first
    jQuery('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        directionNav: true,
        itemWidth: 80,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    jQuery('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        smoothHeight: true,
        sync: "#carousel"
    });

    jQuery('div.slotholder').prepend('<div class="bk-responsive-slide"></div>');


    var $widthW= jQuery(window).width();
    // height for woo
    var $opject = jQuery('.tzproduct-item');
    var $array_li = [];
    jQuery($opject).each(function(){
        $array_li.push(jQuery(this).innerHeight());
    });
    var $max_height = Math.max.apply( Math, $array_li );
    jQuery($opject).css('height',$max_height+'px');
    if (  $widthW > 767 ){
        // height for event grid
        var $opject_event   = jQuery('.tzmaxheight_item');
        var $array_li_event = [];
        jQuery($opject_event).each(function(){
            $array_li_event.push(jQuery(this).innerHeight());
        });
        var $max_height_event = Math.max.apply( Math, $array_li_event );
        jQuery($opject_event).css('height',$max_height_event+'px');
    }
    jQuery('#tzloadding').remove();

    jQuery('#ship-to-different-address-checkbox').on( "click", function() {
        if(jQuery(this).is(":checked"))
        {
            jQuery('.shipping_address').css('display','block');
        } else {
            jQuery('.shipping_address').css('display','none');
        }
    });

});
jQuery(document).ready(function(){

    "use strict";

    /* Method for Header */
    var $check_admin =  jQuery('#wpadminbar');
    if ( $check_admin.length > 0 ){
        jQuery('.tz-header').addClass('tzadminbar');
    }


    // method search

    jQuery('#searchform').css({
        top: ( ($heightWindow / 2 )- 30 ) + 'px'
    });
    jQuery('.tz-search').on( "click", function() {
        jQuery('.tzform-search').fadeIn(1);
        jQuery('#searchform').addClass('searchform_aff');
    });

    jQuery('.tzcontro_search').on( "click", function() {
        jQuery('.tzform-search').fadeOut();
        jQuery('#searchform').removeClass('searchform_aff');
    });

    /* Method for video */
    jQuery('.tzautoplay').on( "click", function() {
        var $_this = jQuery(this);
        var myVideo = $_this.parents('.tz-video').find('.videoID')[0];
        jQuery(this).hide();
        $_this.parents('.tz-video').find('.tz-video-content h3').css('opacity',0);
        $_this.parents('.tz-video').find('.tz-video-content p').css('opacity',0);
        $_this.parents('.tz-video').find('.bg-video').hide();
        $_this.parents('.tz-video').find('.tzpause').show().css('opacity',0);
        if (myVideo.paused)
            myVideo.play();

    }) ;
    jQuery('.tzpause').on( "click", function() {
        jQuery(this).hide();
        var $_this = jQuery(this);
        var myVideo = $_this.parents('.tz-video').find('.videoID')[0];
        $_this.parents('.tz-video').find('.tz-video-content h3').css('opacity',1);
        $_this.parents('.tz-video').find('.tz-video-content p').css('opacity',1);
        $_this.parents('.tz-video').find('.bg-video').show();
        $_this.parents('.tz-video').find('.tzautoplay').show();
        if (myVideo.play)
            myVideo.pause();

    });

    /* Method for Quote */
    jQuery(".tz-quote").owlCarousel({
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        slideSpeed:500,
        paginationSpeed:800,
        rewindSpeed:1000,
        autoPlay:false,
        stopOnHover: false,
        singleItem:false,
        rewindNav:false,
        pagination:false,
        paginationNumbers:false,
        itemsScaleUp:false
    });


    /* Accordion Toggle Items */
    jQuery('.tzaccordion-content:first').show();

    jQuery('.tzaccordion_header').on( "click", function() {
        var $_this = jQuery(this).attr('data-option-id');
        jQuery('.tzaccordion-content').slideUp('normal');
        if(jQuery($_this).is(':hidden') == true) {
            jQuery($_this).slideDown('normal');
        }
    });



    /**
     *  Method For Slider Blog
     * -----------------------------------------------------------------------------
     */
    jQuery('.tzblog-slider-content').each(function(){
        jQuery(this).owlCarousel({
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:false,
            stopOnHover: false,
            singleItem:false,
            rewindNav:false,
            pagination:false,
            autoHeight: true,
            paginationNumbers:false,
            itemsScaleUp:false
        });
        var $_parent = jQuery(this);
        $_parent.parent().find('.tz_slider_prev').on( "click", function() {
            $_parent.trigger('owl.prev');
        }) ;
        $_parent.parent().find('.tz_slider_next').on( "click", function() {
            $_parent.trigger('owl.next');
        }) ;
    }) ;
    jQuery('#createaccount').on( "click", function() {
        if(jQuery(this).is(":checked"))
        {
            jQuery('.create-account').css('visibility','visible');

        } else {
            jQuery('.create-account').css('visibility','hidden');
        }
    });
    jQuery('.tzquick-view').on( "click", function() {
        jQuery('.tzquick-wrap').addClass('tzquick-wrap-eff');
    });
    jQuery('.tzdelete-quick').on( "click", function() {
        jQuery('.tzquick-wrap').removeClass('tzquick-wrap-eff');
    });
});

jQuery(window).scroll(function(){

    // method header
    var $_top = jQuery(window).scrollTop();
    if ( $_top > 0 ){
        jQuery('.tz-header1').addClass('headerAnimate');
        jQuery('.tz-header5').addClass('headerAnimate2');
    }else{
        jQuery('.tz-header1').removeClass('headerAnimate');
        jQuery('.tz-header5').removeClass('headerAnimate2');

    }
    // method for header 3

    if ( $_top > $height_header3  ){
        jQuery('.header3-fix').addClass('headerAnimate3');
        jQuery('.headerAnimate3').css('margin-bottom',$nav3_height + 'px');
    }

    if ( $_top > $height_header3 + 10 ){
        jQuery('.header3-fix').addClass('headerAnimate3_');
    }else{
        jQuery('.header3-fix').removeClass('headerAnimate3_');
    }

    if ( $_top <= $height_header3 ){
        jQuery('.headerAnimate3').css('margin-bottom','0px');
        jQuery('.header3-fix').removeClass('headerAnimate3');

    }
});
// method header
var $_top = jQuery(window).scrollTop();
if ( $_top > 0 ){
    jQuery('.tz-header1').addClass('headerAnimate');
    jQuery('.tz-header5').addClass('headerAnimate2');
}else{
    jQuery('.tz-header1').removeClass('headerAnimate');
    jQuery('.tz-header5').removeClass('headerAnimate2');

}

/******************************************
 -	PREPARE PLACEHOLDER FOR SLIDER	-
 ******************************************/


var setREVStartSize = function() {
    var	tpopt = new Object();
    tpopt.startwidth = 1170;
    tpopt.startheight = 650;
    tpopt.container = jQuery('#rev_slider_3_1');
    tpopt.fullScreen = "on";
    tpopt.forceFullWidth="off";

    tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});
    tpopt.width=parseInt(tpopt.container.width(),0);
    tpopt.height=parseInt(tpopt.container.height(),0);
    tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;
    if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;
    if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;
    if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}
    if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}
    tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));
    if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;
    if(tpopt.fullScreen=="on"){
        tpopt.height=tpopt.bw*tpopt.startheight;
        var cow=tpopt.container.parent().width();var coh=jQuery(window).height();
        if(tpopt.fullScreenOffsetContainer!=undefined){
            try{
                var offcontainers=tpopt.fullScreenOffsetContainer.split(",");
                jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);
                    if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})
            }
            catch(e){}
        }
        tpopt.container.parent().height(coh);tpopt.container.height(coh);
        tpopt.container.closest(".rev_slider_wrapper").height(coh);
        tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
        tpopt.container.css({height:"100%"});tpopt.height=coh;
    }else{
        tpopt.container.height(tpopt.height);
        tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
        tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
    }
};

    /* CALL PLACEHOLDER */
    setREVStartSize();


    var tpj=jQuery;
    tpj.noConflict();
    var revapi3;

    tpj(document).ready(function() {

        if(tpj('#rev_slider_3_1').revolution == undefined)
            revslider_showDoubleJqueryError('#rev_slider_3_1');
        else
            revapi3 = tpj('#rev_slider_3_1').show().revolution(
                {
                    dottedOverlay:"none",
                    delay:9000,
                    startwidth:1170,
                    startheight:650,
                    hideThumbs:200,

                    thumbWidth:100,
                    thumbHeight:50,
                    thumbAmount:3,


                    simplifyAll:"off",

                    navigationType:"none",
                    navigationArrows:"solo",
                    navigationStyle:"round",

                    touchenabled:"on",
                    onHoverStop:"off",
                    nextSlideOnWindowFocus:"off",

                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    drag_block_vertical: false,



                    keyboardNavigation:"off",

                    navigationHAlign:"center",
                    navigationVAlign:"bottom",
                    navigationHOffset:0,
                    navigationVOffset:20,

                    soloArrowLeftHalign:"left",
                    soloArrowLeftValign:"center",
                    soloArrowLeftHOffset:20,
                    soloArrowLeftVOffset:0,

                    soloArrowRightHalign:"right",
                    soloArrowRightValign:"center",
                    soloArrowRightHOffset:20,
                    soloArrowRightVOffset:0,

                    shadow:0,
                    fullWidth:"off",
                    fullScreen:"on",

                    spinner:"spinner0",

                    stopLoop:"off",
                    stopAfterLoops:-1,
                    stopAtSlide:-1,

                    shuffle:"off",


                    forceFullWidth:"off",
                    fullScreenAlignForce:"off",
                    minFullScreenHeight:"",

                    hideThumbsOnMobile:"off",
                    hideNavDelayOnMobile:1500,
                    hideBulletsOnMobile:"off",
                    hideArrowsOnMobile:"off",
                    hideThumbsUnderResolution:0,
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "",
                    hideSliderAtLimit:0,
                    hideCaptionAtLimit:0,
                    hideAllCaptionAtLilmit:0,
                    startWithSlide:0
                });
    });	/*ready*/

    jQuery(document).ready(function(){
        jQuery(".countdown").countdown({
            date: "september 12 2020 23:23:23", // add the countdown's end date (i.e. 3 november 2012 12:00:00)
            format: "on" // on (03:07:52) | off (3:7:52) - two_digits set to ON maintains layout consistency
        });
    });
