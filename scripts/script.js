$(document).ready(function(){
    $('.nav__burger').click(function(event){
        $('.nav__burger,.nav__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.studying-programs__item-p').click(function(){
        if($('.studying-programs__column').hasClass('one')){
            $('.studying-programs__item-p').not($(this)).removeClass('active');
            $('.studying-programs__slider-box').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function(){
    $('.contact__item-p').click(function(){
        if($('.contact__body').hasClass('one')){
            $('.contact__item-p').not($(this)).removeClass('active');
            $('.contact__slider-box').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});


/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


