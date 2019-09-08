$(document).ready(function () {
    $('.top-table__top-list').click(function (e) {
        $(this).toggleClass('open-list');
        $(this).find('.top-table__bottom').slideToggle('.open-table');
    });
});
