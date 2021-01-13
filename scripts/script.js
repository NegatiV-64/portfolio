// Burger
$('.nav__burger').click(function (e) {
    e.preventDefault();
    $('.nav__burger').toggleClass('is-active');
    $('.nav').toggleClass('nav-notfixed');
    $('.nav__burger').toggleClass('burger-stay')
    $('.mobile-nav').toggleClass('mobile-nav__active');
});


// Fixed nav
$('.nav').css({
    width: '100%',
    top: $(window).height() - $('.nav').outerHeight()
})

$(window).on('scroll', function () {
    let editPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop();

    if (editPosition > 0) {
        $('.nav').css('top', editPosition)
    } else {
        $('.nav').css('top', 0)
    }
})

// Tabs
$('.project-content__links').click(function (e) {
    e.preventDefault();
    $('.project-content__links').removeClass('project-content__links_active')
    $(this).addClass('project-content__links_active')

    let linkFilter = $(this).attr('data-filter');

    $('.project-website[data-filter]').stop().removeClass('project-website_active')
    $(`.project-website[data-filter=${linkFilter}]`).stop().addClass('project-website_active')
});

// Sending Data to the Google Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbySzvCCwIEyAYTgd-gQ9gMlXy5XXE-JY3lfaQ7wxm0uDvGVdz_6/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()

    // Adding animation to the button
    $('.btn-submit').addClass('btn-submit-upper');
    $('.btn-sending').addClass('btn-sending-animation');
    $('.btn-send').addClass('btn-send-active');
    setTimeout(() => {
        console.log('HI');
        $('.btn-send').addClass('btn-send-done')
    }, 1005);

    setTimeout(() => {
        if (
            $('.btn-submit').hasClass('btn-submit-upper') &&
            $('.btn-sending').hasClass('btn-sending-animation') &&
            $('.btn-send').hasClass('btn-send-active') &&
            $('.btn-send').hasClass('btn-send-done')
        ) {
            $('.btn-submit').removeClass('btn-submit-upper');
            $('.btn-sending').removeClass('btn-sending-animation');
            $('.btn-send').removeClass('btn-send-active')
            $('.btn-send').removeClass('btn-send-done')
            $('.btn-send').addClass('btn-send-remover')
            setTimeout(() => {
                $('.btn-send').removeClass('btn-send-remover')
            }, 201);
        }
    }, 4000);

    // Sending data
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response =>
            console.log('Success')
        )
        .catch(error => console.error('Error!', error.message))
})

// Smooth Scroll to ID
$('.nav-list__link').click(function (e) {
    e.preventDefault();
    let hrefLink = $(this).attr('href');
    let transferToSection = $(hrefLink).offset().top;

    $('html, body').stop().animate({
        scrollTop: transferToSection - $('.nav').outerHeight()
    }, {
        duration: 300
    }
    )
});

// Smooth Scroll to ID on Mobile
$('.mobile-list__link').click(function (e) {

    e.preventDefault();

    $('.nav__burger').toggleClass('is-active');
    $('.nav').removeClass('nav-notfixed');
    $('.nav__burger').removeClass('burger-stay')
    $('.mobile-nav').removeClass('mobile-nav__active');


    let hrefLink = $(this).attr('href');
    let transferToSection = $(hrefLink).offset().top;

    $('html, body').stop().animate({
        scrollTop: transferToSection - $('.nav').outerHeight()
    }, {
        duration: 300
    }
    )
});

// ToProject
$('.header-content__link').click(function (e) {
    e.preventDefault();
    let hrefToProj = $(this).attr('href');
    let toHeader = $(hrefToProj).offset().top;

    $('html, body').stop().animate({
        scrollTop: toHeader
    }, {
        duration: 300
    }
    )
});

// ToTop 
$('.footer__totop').click(function (e) {
    e.preventDefault();
    let hrefToTop = $(this).attr('href');
    let toHeader = $(hrefToTop).offset().top;

    $('html, body').stop().animate({
        scrollTop: toHeader
    }, {
        duration: 300
    }
    )
});

// Scroll Spy
$(window).on('scroll', function () {
    let fromTop = $(document).scrollTop();
    let headerHeight = $('.header').innerHeight() - $('.nav').innerHeight();
    let aboutHeight = $('.about').innerHeight() + headerHeight - $('.nav').innerHeight();
    let portfolioHeight = $('.project').innerHeight() - 250 + aboutHeight - $('.nav').innerHeight();

    if (fromTop > headerHeight) {
        $('.nav-list__link').removeClass('nav-list__link-active')
        $('.nav-list__link-2').addClass('nav-list__link-active')
    }

    if (aboutHeight < fromTop) {
        $('.nav-list__link').removeClass('nav-list__link-active')
        $('.nav-list__link-3').addClass('nav-list__link-active')
    }

    if (portfolioHeight < fromTop) {
        $('.nav-list__link').removeClass('nav-list__link-active')
        $('.nav-list__link-4').addClass('nav-list__link-active')
    }

    if (headerHeight > fromTop) {
        $('.nav-list__link').removeClass('nav-list__link-active')
        $('.nav-list__link-1').addClass('nav-list__link-active')
    }
});

// Animation for skills section
$(window).on('scroll', function () {
    if ($('.about-right').hasClass('aos-animate')) {
        $('.progress-bar').css('transition', '1s')

        setTimeout(() => {
            $('.progress-bar[data-content="CSS"]').addClass('progress-bar-css');
            $('.progress-bar[data-content="HTML"]').addClass('progress-bar-html');
            $('.progress-bar[data-content="Bootstrap"]').addClass('progress-bar-bootstrap');
            $('.progress-bar[data-content="JavaScript"]').addClass('progress-bar-javascript');
            $('.progress-bar[data-content="jQuery"]').addClass('progress-bar-jQuery');
            $('.progress-bar[data-content="design"]').addClass('progress-bar-design');
        }, 1000);
    }

    else {
        $('.progress-bar').css('transition', '0s')

        $('.progress-bar[data-content="CSS"]').removeClass('progress-bar-css');
        $('.progress-bar[data-content="HTML"]').removeClass('progress-bar-html');
        $('.progress-bar[data-content="Bootstrap"]').removeClass('progress-bar-bootstrap');
        $('.progress-bar[data-content="JavaScript"]').removeClass('progress-bar-javascript');
        $('.progress-bar[data-content="jQuery"]').removeClass('progress-bar-jQuery');
        $('.progress-bar[data-content="design"]').removeClass('progress-bar-design');
    }
})

// Animation BETA
AOS.init({
    duration: 1200,
})

// Adaptation
if (window.matchMedia('(max-width: 1200px)').matches) {
    let aboutColHead = $('.about-col__heading');
    let aboutColText = $('.about-col__text');
    $('.fa-lightbulb').next(aboutColHead).removeAttr("data-aos-anchor").removeClass('about-col__heading2').removeAttr("data-aos-delay");
    $('.fa-lightbulb').next(aboutColHead).next(aboutColText).removeAttr("data-aos-anchor").removeAttr("data-aos-delay");

    $('.fa-rocket-launch').next(aboutColHead).removeAttr("data-aos-anchor").removeClass('about-col__heading2').removeAttr("data-aos-delay");
    $('.fa-rocket-launch').next(aboutColHead).next(aboutColText).removeAttr("data-aos-anchor").removeAttr("data-aos-delay");
}

if (window.matchMedia('(max-width: 992px)').matches) {
    let aboutColHead = $('.about-col__heading');
    let aboutColText = $('.about-col__text');
    $('.fa-lightbulb').next(aboutColHead).attr("data-aos-anchor", ".fa-lightbulb").addClass('about-col__heading2').attr("data-aos-delay", "300");
    $('.fa-lightbulb').next(aboutColHead).next(aboutColText).attr("data-aos-anchor", ".about-col__heading2").attr("data-aos-delay", "350");

    $('.fa-rocket-launch').next(aboutColHead).attr("data-aos-anchor", ".fa-rocket-launch").addClass('about-col__heading2').attr("data-aos-delay", "300");
    $('.fa-rocket-launch').next(aboutColHead).next(aboutColText).attr("data-aos-anchor", ".about-col__heading2").attr("data-aos-delay", "350");
}

if (window.matchMedia('(max-width: 576px)').matches) {
    $('.about-col').children('.fal').removeAttr("data-aos-delay");

    let aboutColHead = $('.about-col__heading');
    let aboutColText = $('.about-col__text');

    $('.fa-tachometer-fastest').next(aboutColHead).addClass('about-col__heading_1');
    $('.fa-tachometer-fastest').next(aboutColHead).next(aboutColText).attr("data-aos-anchor", ".about-col__heading_1");


    $('.fa-phone-laptop').next(aboutColHead).addClass('about-col__heading_2');
    $('.fa-phone-laptop').next(aboutColHead).next(aboutColText).attr("data-aos-anchor", ".about-col__heading_2");

    $('.fa-lightbulb').next(aboutColHead).removeClass('about-col__heading2').addClass('about-col__heading_3').removeAttr("data-aos-delay").removeAttr("data-aos-anchor");
    $('.fa-lightbulb').next(aboutColHead).next(aboutColText).attr("data-aos-anchor", ".about-col__heading_3").removeAttr("data-aos-delay");

    $('.fa-rocket-launch').next(aboutColHead).removeAttr("data-aos-anchor").removeClass('about-col__heading2').addClass('about-col__heading_4').removeAttr("data-aos-delay");
    $('.fa-rocket-launch').next(aboutColHead).next(aboutColText).attr("data-aos-anchor", ".about-col__heading_4").removeAttr("data-aos-delay");
}