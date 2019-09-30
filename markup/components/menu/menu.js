
import $ from 'jquery'

$(document).ready(function(){
    calcWidth();
    $('.menu__dots').click(function(){
        $(this).closest('.menu').toggleClass('active');
    })
    $(document).mouseup(function (e){
		var div = $(".menu");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.menu').removeClass('active');
		}
	});
})
// $(window).resize(function(){
//     calcWidth();
// })

function calcWidth(){
    var maxWidth = $('.header__container .menu__items').outerWidth() + 30;
    var wdh = 0;
    $('.header__container .menu__item').each(function(){
        wdh+=$(this).outerWidth();
        if(wdh > maxWidth) {
            $(this).appendTo($('.header__container .menu__more'))
        }
    })
    if(wdh > maxWidth){
        $('.menu__dots').show();
    } else {
        $('.menu__dots').hide();
    }
};


