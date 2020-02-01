$(document).ready(function () {

    $(".js-scroll-to-products").click(function() {
        scrollTo(".js-section-products", 850);
    });

    $(".js-scroll-to-recents").click(function() {
        scrollTo(".js-section-recents", 850);
    });

    $(".js-scroll-to-reviews").click(function() {
        scrollTo(".js-section-reviews", 850);
    });

    $(".js-scroll-to-contact").click(function() {
        scrollTo(".js-section-contact", 850);
    });

    $(".js-scroll-to-top").click(function() {
        scrollTo("header", 850);
    });
});

function scrollTo(section, speed) {
    $("html, body").animate({scrollTop: $(section).offset().top}, speed);
}