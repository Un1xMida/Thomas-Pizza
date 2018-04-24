$(window).load(function() {
    //Preloader Script
    $('.preloader-cont').fadeOut();
    $('main').fadeIn();


        // Add slideDown animation to Bootstrap dropdown when expanding.
        $('.languages .dropdown').on('show.bs.dropdown', function() {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
        });

        // Add slideUp animation to Bootstrap dropdown when collapsing.
        $('.languages .dropdown').on('hide.bs.dropdown', function() {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
        });

});

var swiper = new Swiper('.home-slider .swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    allowTouchMove: false,
    breakpoints: {
        1024: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 1
        },
        320: {
            slidesPerView: 1
        }
    }
});


// functional thing to make the spyscroll
$('.button-spy').click(function(){
    var target = $(this).attr( "data-link" );
    $('html,body').scrollTo(target,900);
})

$(window).scroll(function() {
    if($(window).scrollTop() > 100){
        $('.goTop').fadeIn();
    }
    else{
        $('.goTop').fadeOut();
    }
})
$('.goTop').click(function(){
    $('html,body').scrollTo(0,900);
})


// Static AJAX CALL
$(".section-one .section-getMore").click(function(){
    $( ".section-one .load-here" ).load( "load.html .section-one-data" );
})