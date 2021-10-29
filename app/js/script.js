
const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
    const menuBurger = document.querySelector('.header__nav');
    const iconBlur = document.querySelector('.main');
    iconMenu.addEventListener("click",function(e) {
        document.body.classList.toggle('lock');
        iconBlur.classList.toggle('blur');
        iconMenu.classList.toggle('active');
        menuBurger.classList.toggle('active');
    })
};
  

let scrollpos = window.scrollY
const header = document.querySelector('.header');
const social = document.querySelector('.header__social');
const logo = document.querySelector('.header__logo');
const scrollChange = 250;
window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    const headerPicture = document.querySelector('.header__picture>img')
    if (scrollpos >= scrollChange) {
        header.classList.add('fixed');
        social.classList.add('fixed');       
        logo.classList.add('fixed');
        headerPicture.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
        social.classList.remove('fixed');
        logo.classList.remove('fixed');
        headerPicture.classList.remove('fixed');
    }
});


$(document).ready(function() {
    $('.slider').slick({
        arrows:false,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        waitForAnimate: false,
        centerMode: true,
        touchThreshold: 10,
        responsive:[{
            breakpoint:992,
            settings:"unslick",
        }] 
    }),
    $('.gallery__content').slick({
        arrows:true,
        dots: true,
        slidesToShow: 6,
        infinite: false,
        draggable: false,
        rows: 2,
        touchThreshold: 10,
        waitForAnimate: false,
        responsive:[{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                } 
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                } 
            },{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                } 
            },{
                breakpoint: 766,
                settings: {
                    slidesToShow: 2,
                } 
            },{
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                } 
            },
        ]
    }),
    $('.video__content').slick({
        arrows:true,
        dots: true,
        slidesToShow: 3,
        infinite: false,
        draggable: false,
        rows: 2,
        touchThreshold: 10,
        waitForAnimate: false,
    });
});


const arrow = document.querySelector('.question__list');
const arrowChild = arrow.ElementChild
arrow.addEventListener("click", function (e) {
    document.querySelector('.question__explanation').classList.toggle('active');
    document.querySelector('.question__subtitle-arrow').classList.toggle('active');
});


const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 2;

            let animItemPoint = window.innerHeight - animItemHeight * animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                animItem.classList.remove('active');   
            }
        }   
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}


const iconPrice = document.querySelector('.category__blue');
const iconPriceYellow = document.querySelector('.category__yellow');
const columnPriceBlue = document.querySelector('.price_blue');
const columnPriceYellow = document.querySelector('.price_yellow');
if (iconPriceYellow) {
    iconPriceYellow.addEventListener("click",function(e) {
        columnPriceYellow.classList.add('active');
        columnPriceBlue.classList.add('active');
    })
};
if (iconPrice) {
    iconPrice.addEventListener("click",function(e) {
        columnPriceBlue.classList.remove('active');
        columnPriceYellow.classList.remove('active');
    })
};

const iconPicture = document.querySelector('.category__button_photo');
const iconVideo = document.querySelector('.category__button_video');
const columnPicture = document.querySelector('.gallery__pictures');
const columnVideo = document.querySelector('.video');
if (iconVideo) {
    iconVideo.addEventListener("click",function(e) {
        columnPicture.classList.add('active');
        columnVideo.classList.add('active');
    })
};
if (iconPicture) {
    iconPicture.addEventListener("click",function(e) {
        columnPicture.classList.remove('active');
        columnVideo.classList.remove('active');
    })
};

const iconTrainers = document.querySelector('.trainers__picture');
const textTrainers = document.querySelector('.trainers__text');
if (iconTrainers) {
    iconTrainers.addEventListener("mouseover",function(e) {
        textTrainers.classList.add('hover');
        iconTrainers.classList.add('hover');
    })
};
if (iconTrainers) {
    iconTrainers.addEventListener("mouseout",function(e) {
        textTrainers.classList.remove('hover');
        iconTrainers.classList.remove('hover');
    })
};

// $('.question__list').on('click',function(){
//     $(this).child('.question__explanation').classList.toggle('.active');
// });
// function clickedColumn(e){
//   e.preventDefault();
//   if(this.querySelector('.question__list')){
//     this.classList.toggle('active');
//   }
// }
// document.querySelectorAll('.question__list').forEach(function(el){
// el.addEventListener('click', clickedColumn);
// });
// const iconMenu = document.querySelector('.header__burger');
// if (iconMenu) {
//     const menuBurger = document.querySelector('.header__nav');
//     const iconBlur = document.querySelector('.main');
//     iconMenu.addEventListener("click",function(e) {
//         document.body.classList.toggle('lock');
//         iconBlur.classList.toggle('blur');
//         iconMenu.classList.toggle('active');
//         menuBurger.classList.toggle('active');
//     })
// };

// var testContainer = document.querySelector('.question__list');
// var childNodeByClass = testContainer.querySelector('.question__explanation');
// if (testContainer) {
//       testContainer.addEventListener("click",function(e) { 
//         childNodeByClass = document.classList.add('_active') ;
//       })
// };

// const slider = $(".flight__slider");
// slider
//   .slick({
//     dots: true
//   });

// slider.on('wheel', (function(e) {
//   e.preventDefault();

//   if (e.originalEvent.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else {
//     $(this).slick('slickPrev');
//   }
// }));