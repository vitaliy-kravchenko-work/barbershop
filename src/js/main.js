$(document).ready(function(){
    // Scroll


    function scroll(from) {
        $(from).on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    }

    scroll(".list-menu__item-masters");
    scroll(".list-menu__item-services");
    scroll(".list-menu__item-training");
    scroll(".list-menu__item-gallery");
    scroll(".list-menu__item-contacts");
    scroll(".training-utp__button");


    // Burger

    function burger(clickOn) {
        $(clickOn).removeClass("burger-menu_first-load");
        $(clickOn).toggleClass("burger-menu_active");
        $(clickOn).toggleClass("burger-menu_not-active");
        $(".burger-modal").toggleClass("modal_active");
        $(".burger-modal").toggleClass("modal_not-active");

        if(document.body.style.overflow == "") {
            document.body.style.overflow = "hidden";
            $(".burger-modal").css("overflow", "hidden");
        } else {
            document.body.style.overflow = "";
            $(".burger-modal").css("overflow", "");
        }
    }

    $(".burger-menu").on("click", function(e) {
        e.preventDefault();
        burger(".burger-menu");
    });

    $(".list-menu__item-burger").on("click", function(e) {
        e.preventDefault();
        burger(".burger-menu");
    });

    $(".list-language__item-burger").on("click", function(e) {
        burger(".burger-menu");
    });
});