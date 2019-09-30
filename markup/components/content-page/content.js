import $ from 'jquery'

$('.form-group__input').on('change',function(){
    if( $(this).val() != '' ) {
        $(this).parent().addClass('not-empty');
    } else {
        $(this).parent().removeClass('not-empty');
    }
});

$('.select').select2({
    minimumResultsForSearch: -1,
});
