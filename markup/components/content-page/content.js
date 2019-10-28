import $ from 'jquery'


if ( !($('.form-group .form-group__input').val() == '') ) {
    $(this).parent().addClass('not-empty');
};

$('.form-group__input, .form-group__textarea').on('change', function () {
    if ($(this).val() != '') {
        $(this).parent().addClass('not-empty');
    } else {
        $(this).parent().removeClass('not-empty');
    }
});

$('.select').select2({
    minimumResultsForSearch: -1,
});

