

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
    };

    if (widthV > widthStage) {
        posImageX = (widthStage - widthV) / 2;
    };

    return { top: posImageY, left: posImageX, width: widthV, height: heightV };
};


/*
 * Method resize image
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
function tz_init(){
    var contentWidth    = jQuery('.tz-portfolio-content').width();
    var numberItem      = 2;
    var newColWidth     = 0;
    var heightElement   = 280;
    var landscape       = 0;
    var portrait        = 0;
    var featureColWidth = 0;
    var widthWindwow    = jQuery(window).width();
    var $column         = jQuery('.tz-portfolio-content').attr('data-option-column');
    if (widthWindwow >= 992) {
        numberItem =  $column;
    } else if (  widthWindwow >= 768) {
        numberItem =  2 ;
    } else if (  widthWindwow >= 480) {
        numberItem =  2 ;
    } else if (widthWindwow < 480) {
        numberItem =  1 ;
    }
    newColWidth    =  Math.floor(contentWidth / numberItem);
    heightElement  =  jQuery('.element').height();
    landscape      =  newColWidth * 2;
    portrait       =  280 * 2;

    jQuery('.element').css({
        width: newColWidth + 'px'
    });
    jQuery('.tz_feature_item, .tz-landscape').width(landscape);
    jQuery('.tz-portrait').css('height',portrait+'px');
    var $container  = jQuery('.tz-portfolio-content') ;
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
var resizeTimer       =   null;
jQuery(window).bind('load resize', function() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout("tz_init()", 100);
});

