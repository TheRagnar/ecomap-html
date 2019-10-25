


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