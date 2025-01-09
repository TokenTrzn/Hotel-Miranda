const offersSwiper = new Swiper('.popularList__swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

const relatedRoomsSwiper = new Swiper('.relatedRooms__swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

const facilitiesSwiper = new Swiper('.facilities__swiper', {
    loop: true,
    pagination: {
        el: '.facilities__swiper .swiper-pagination',
        clickable: true
    }
})

const fcounterSwiper = new Swiper('.counter__swiper', {
    loop: true,
    pagination: {
        el: '.counter__swiper .swiper-pagination',
        clickable: true
    }
})