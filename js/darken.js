$('.darken').hover(function() {
    $(this).find('img').fadeTo(300, 0.5);
}, function() {
    $(this).find('img').fadeTo(300, 1);
});
