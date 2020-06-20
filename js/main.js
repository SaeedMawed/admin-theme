$(document).on('click', '#dashboard-content button', function() {
    $('.dashboard-submenu-header.active').removeClass('active');
    $(this).addClass('active');
})