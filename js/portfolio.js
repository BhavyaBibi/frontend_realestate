
var $container        =   jQuery('.tzPortfolio'),
    Desktop           =   variables_portfolio.desktop,
    tabletportrait    =   variables_portfolio.tabletportrait,
    mobilelandscape   =   variables_portfolio.mobilelandscape,
    mobileportrait    =   variables_portfolio.mobileportrait,
    $filter_status    =   variables_portfolio.filter_status,
    $paging           =   variables_portfolio.paging,
    resizeTimer = null;

var resizeImage = function (widthImage, heightImage, widthStage, heightStage) {
    var escImageX = widthStage / widthImage;
    var escImageY = heightStage / heightImage;

    var escalaImage = (escImageX > escImageY) ? escImageX : escImageY;

    var widthV = widthImage * escalaImage;
    var heightV = heightImage * escalaImage;
    var posImageY = 0;
    var posImageX = 0;

    if (heightV > heightStage) {
        posImageY = (heightStage - heightV) / 2;
    }

    if (widthV > widthStage) {
        posImageX = (widthStage - widthV) / 2;
    }

    return { top: posImageY, left: posImageX, width: widthV, height: heightV };
};

/*
 * Method reize image
 * @variables class
 */
function TzTemplateResizeImage(obj){
    var widthStage;
    var heightStage ;
    var widthImage;
    var heightImage;
    obj.each(function (i,el){

        heightStage = jQuery(this).height();

        widthStage = jQuery (this).width();

        var img_url = jQuery(this).find('img').attr('src');

        var image = new Image();
        image.src = img_url;

        widthImage = image.naturalWidth;
        heightImage = image.naturalHeight;

        var tzimg	=	new resizeImage(widthImage, heightImage, widthStage, heightStage);
        jQuery(this).find('img').css ({ top: tzimg.top, left: tzimg.left, width: tzimg.width, height: tzimg.height });


    });

}

/*
 * Method portfolio column
 * @variables Desktop
 * @variables tabletportrait
 * @variables mobilelandscape
 * @variables mobileportrait
 */
function tz_init(Desktop, tabletportrait, mobilelandscape, mobileportrait){
    var contentWidth    = jQuery('.tzPortfolio').width();
    var numberItem      = 2;
    var newColWidth     = 0;
    var featureColWidth = 0;
    var widthWindwow = jQuery(window).width();
    if (widthWindwow >= 992) {
        numberItem = Desktop;
    } else if (  widthWindwow >= 768) {
        numberItem = tabletportrait ;
    } else if (  widthWindwow >= 480) {
        numberItem = mobilelandscape ;
    } else if (widthWindwow < 480) {
        numberItem = mobileportrait ;
    }
    newColWidth = Math.floor(contentWidth / numberItem);
    featureColWidth = newColWidth * 2;
    jQuery('.element').width(newColWidth);
//    jQuery('.tz_feature_item').width(featureColWidth);
    var $container  = jQuery('.tzPortfolio') ;
    $container.imagesLoaded(function(){
        $container.isotope({
            masonry:{
                columnWidth: newColWidth
            }
        });

    });
    jQuery('.portfolio-padding').each(function(){
        var $height_element = jQuery(this).height();
        var $height_text   = jQuery(this).find('.tzitem-content').height();
        var $top           = ( $height_element - $height_text ) / 2;
        jQuery(this).find('.tzitem-content').css('top', $top + 'px');
    });
    TzTemplateResizeImage(jQuery('.item-image'));
}

/*
 * Method reize
 */
jQuery(window).bind('load resize', function() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout("tz_init(Desktop, tabletportrait, mobilelandscape, mobileportrait)", 100);
});

/*
 * Method filter portfolio
 */

jQuery(document).ready(function(){
    $container.imagesLoaded( function(){
        tz_init(Desktop, tabletportrait, mobilelandscape, mobileportrait);
    });

});


jQuery(function(){
    $container.infinitescroll({
            navSelector  : '.tzpagination2 a',    // selector for the paged navigation
            nextSelector : '.tzpagination2 a.next',  // selector for the NEXT link (to page 2)
            itemSelector : '.element',     // selector for all items you'll retrieve
            errorCallback: function(){


            },
            loading: {
                msgText:'',
                finishedMsg: '',
                img: variables_portfolio.image,
                selector: '#tz_append'
            }
        },
        // call Isotope as a callback
        function( newElements ) {
            var $newElems =   jQuery( newElements ).css({ opacity: 0 });
            // ensure that images load before adding to masonry layout
            $newElems.imagesLoaded(function(){
                // show elems now they're ready
                $newElems.animate({ opacity: 1 });
                // trigger scroll again
                $container.isotope( 'appended', $newElems);
                if (String(jQuery.browser.safari) && String(document.readyState) !== "complete") {
                    tz_init(Desktop, tabletportrait, mobilelandscape, mobileportrait);
                } else {
                    tz_init(Desktop, tabletportrait, mobilelandscape, mobileportrait);
                }
                //if there still more item
                if($newElems.length){
                    //move item-more to the end
                    jQuery('div#tz_append').find('a:first').show();
                }
            });

        }
    );


});

