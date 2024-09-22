$(document).ready(function() {
    $('.toggle-btn').click(function() {
        $('.sidebar').toggleClass('show');
        $('.content').toggleClass('shift');
    });
});
