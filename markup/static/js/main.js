'use strict';
import 'jquery'
import './select2.full.min';
import '../../components/menu/menu';
import '../../components/header/header';
import '../../components/content-page/content';
/*
    This file can be used as entry point for webpack!
 */

    // проставляем title у ссылок изображений
    // инициализируем (подключаем) либу фотогалереи

(function ($) {
    $(document).ready(function () {

    window.lightGallery = function(block, a) {
        $(block).find(a).each(function() {
            $(this).attr('data-sub-html', $(this).find('img').attr('title'));
        });
        $(block).lightGallery({
             selector: a,
             download: false,
             fullScreen: false,
             zoom: false,
             share: false,
             thumbnail: true
        });
    },

    $('.media__slider').lightGallery({
         selector: 'a'
    });
    $('.gallery').lightGallery({
        selector: 'a'
    });
 // jQuery(function ($) {

     $('.slider-1-for').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         infinite: false,
         asNavFor: '.slider-1-nav'
     });
     $('.slider-1-nav').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         asNavFor: '.slider-1-for',
         infinite: false,
         dots: false,
         // arrows: true,
         nextArrow: ".slider-1-nav__arrow-next",
         prevArrow: ".slider-1-nav__arrow-prev",
         centerMode: false,
         focusOnSelect: true,
         variableWidth: true,
         responsive: [
             {
                 breakpoint: 1366,
                 settings: {
                     centerMode: true,
                     slidesToShow: 3,
                     slidesToScroll: 1,
                 }
             },
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
         ]
     });


        var shareBtn = '.share-btn',
            shareMenu = '.dropdown-menu',
            shareClose = '.close';

        $(shareBtn).on('click', function(){
            // e.preventDefault();
            $(this).toggleClass('open');
            $(this).parent().find(shareMenu).toggleClass('active');
        });
        $(shareClose).on('click', function(){
            $(this).parents().find(shareMenu).removeClass('active');
            $(this).parents().find(shareBtn).removeClass('open');
        });



      var filterBtn = '.map-filter__show-btn',
          filterMenu = '.map-filter__menu',
          filterClose = '.menu-filter__hide-filter';

      $(filterBtn).on('click', function(){
          // e.preventDefault();
          if (!($(this).hasClass('open'))){
              $(this).addClass('open');
              $(this).parent().find(filterMenu).addClass('active');
              // filterMenu
          }

      });
      $(filterClose).on('click', function(){
          $(this).parents().find(filterMenu).removeClass('active');
          $(this).parents().find(filterBtn).removeClass('open');

      });


      /*frontend*/
      var mapobjBtn = '.map-obj',
          mapObjInfo = '.map-object__info',
          ObjInfoClose = '.object-info__close-info';

      $(mapobjBtn).on('click', function(){
          // e.preventDefault();
          if (!($(this).hasClass('open'))){
              $(this).addClass('open');
              $(this).parent().find(mapObjInfo).addClass('active');
              // filterMenu
          }

      });
      /*frontend end*/

      $(ObjInfoClose).on('click', function(){
          $(this).parents().find(mapObjInfo).removeClass('active');
          $(this).parents().find(mapobjBtn).removeClass('open');

      });



        $('.page__tabs').on('click', 'li:not(.active)', function () {
            $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.project__content').find('.page__tab-content')
            .removeClass('active').eq($(this).index()).addClass('active');
        });

        $('.page__tabs').on('click', 'li:not(.active)', function () {
            $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.col-md-8').find('.page__tab-content')
            .removeClass('active').eq($(this).index()).addClass('active');
        });

        $('.ecomap__tabs').on('click', 'li:not(.active)', function () {
            $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.ecomap').find('.ecomap__content')
            .removeClass('active').eq($(this).index()).addClass('active');

        });


 

        $('.app-item-ans__score .star').hover(function () {
            $(this).addClass('hover-active');
            $(this).parent().find('.star:lt(' + $(this).index() +
                ')').addClass('hover-active');
            $(this).parent().find('.star:gt(' + $(this).index() +
                ')').addClass('no-hover-active');
        }).mouseout(function () {
            $(this).parent().find('.star').removeClass('hover-active');
            $(this).parent().find('.star:gt(' + $(this).index() +
                ')').removeClass('no-hover-active');
        }).click(function () {
            $(this).removeClass('hover-active').addClass('active');
            $(this).parent().find('.star:lt(' + $(this).index() +
                ')').removeClass('hover-active').addClass('active');
            $(this).parent().find('.star:gt(' + $(this).index() +
                ')').removeClass('no-hover-active').removeClass('active');
        });



        $('.counter__num').each(function (index,el) {
            // e.preventDefault();
            if ($(this).text() < 11 ) {
                $(this).removeClass('green lightgreen turquoise').addClass('orange');
            }
            if ($(this).text() > 10 && $(this).text() < 31) {
                $(this).removeClass('orange lightgreen turquoise').addClass('green');
            }
            if ($(this).text() > 30 && $(this).text() < 41) {
                $(this).removeClass('green orange turquoise').addClass('lightgreen');
            }
            if ($(this).text() > 40 ) {
                $(this).removeClass('green lightgreen orange').addClass('turquoise');
            }
            // return false;
        });



     var btnMore = document.querySelector(".more");
     btnMore.onclick = function() {
        document.querySelector(".search-form__sections").classList.toggle('open');
         return false;
     };



    });


})(jQuery);


 // }(jQuery));
