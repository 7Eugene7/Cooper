//HEADER
const burgerClick = document.querySelector('.header__burger'),
    body = document.querySelector('body'),
    headerMenu = document.querySelector('.header__menu');


burgerClick.addEventListener('click', function () {
    burgerClick.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('active');
})
//Slider-bg----------------------
const slider = document.querySelector('#slider');
const btnPrev = document.querySelector('#btnprev');
const btnNext = document.querySelector('#btnnext');
const sliderItems = Array.from(slider.children);


sliderItems.forEach(function (slide, index) {
    // Скрываем слайды кроме 1го
    if (index !== 0) slide.classList.add('hidden')

    // Добавляем индексы
    slide.dataset.index = index;
    // Добавляем data атрибут для первого /активного слайда
    sliderItems[0].setAttribute('data-active', '');
    // ---Click slider
    //slide.addEventListener('click', function () {
    //    showNextSlide('next')
    //});
});

btnNext.addEventListener('click', function () {
    // Скрываем текущий слайд 
    showNextSlide('next')

});

btnPrev.addEventListener('click', function () {
    // Скрываем текущий слайд 
    showNextSlide('prev')

});

function showNextSlide(direction) {
    // Скрываем текущий слайд 
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Расчитываем индекс в зависимости от направления движения
    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    // Показываем след слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}
//------dots slider 
const dots = document.querySelectorAll('#dots li').forEach(function (indicator, index) {
    indicator.addEventListener('click', () => {
        showNextSlide('next')
    });
});