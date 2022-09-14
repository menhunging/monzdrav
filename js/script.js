$(document).ready(function () {

    if ($('.selectric').length > 0) {
        $('.selectric').selectric();
    }

    if ($('.sliderProjects').length > 0) {
        let slider = $('.sliderProjects')
        let countItem = $('.sliderProjects .item').length

        slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });


        if (countItem <= 1) {
            slider.addClass('not-dots')
        }

        dotsSliderPosition(slider)

    }

    if ($('.sliderReviews').length > 0) {

        let slider = $('.sliderReviews')
        let countItem = $('.sliderReviews .item').length

        slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });

        if (countItem <= 1) {
            slider.addClass('not-dots')
        }

        dotsSliderPosition(slider)
    }

    if ($('.sliderGallery').length > 0) {

        let slider = $('.sliderGallery')
        let countItem = $('.sliderGallery .item').length

        slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });

        if (countItem <= 1) {
            slider.addClass('not-dots')
        }

        dotsSliderPosition(slider)
    }

    if ($('.cosmetics').length > 0) {

        $('.cosmeticsList .cosmetic').map(function () {

            let name = $(this).find('.name')
            let plus = $(this).find('.plus')

            name.on('click', function (e) {
                e.preventDefault()
                cosmeticsClickhandler($(this))
                $(this).parents('.cosmetic').find('.plus').stop().addClass('open')
            })

            plus.on('click', function (e) {
                e.preventDefault()
                cosmeticsClickhandler($(this))
                $(this).parents('.cosmetic').find('.name').stop().addClass('open')
            })

        })

    }

    // if ($('.slideItem').length > 0) {
    //     $('.slideItem').map(function () {
    //         let head = $(this).find('.slideHead')
    //         let content = $(this).find('.slideContent')

    //         if (head.hasClass('opened')) {
    //             content.stop().slideDown()
    //         }

    //         head.on('click', function () {
    //             if (head.hasClass('opened')) {
    //                 content.stop().slideUp()
    //                 head.removeClass('opened')
    //             } else {
    //                 content.stop().slideDown()
    //                 head.addClass('opened')
    //             }
    //         })
    //     })
    // }

})

$(window).resize(function () {

});


function cosmeticsClickhandler(event) {
    let nameCosmetic = $('.cosmetic .name')
    let plusCosmetic = $('.cosmetic .plus')
    let infoCosmetic = $('.cosmetic .info')
    let parents = event.parents('.cosmetic')

    nameCosmetic.removeClass('open')
    plusCosmetic.removeClass('open')
    infoCosmetic.stop().slideUp()
    event.stop().addClass('open')
    parents.find('.info').stop().slideDown()
}

function dotsSliderPosition(parents) {

    let prev = parents.find('.slick-prev')
    let next = parents.find('.slick-next')
    let dotsPosition = parents.find('.slick-dots li').width() * parents.find('.slick-dots li').length

    prev.css('margin-left', -dotsPosition - 50)
    next.css('margin-left', dotsPosition + 50)

}