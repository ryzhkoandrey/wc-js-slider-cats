// Элементы на странице
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');

sliderItems.forEach(function (slide, index) {

    // Скрываем все слайды, кроме первого
    if (index !== 0) slide.classList.add('hidden');

    // Добавляем индексы
    slide.dataset.index = index;

    // Добавляем data атрибут active для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '');

    // Клик по слайдам
    slide.addEventListener('click', function () {
        // Скрываем текущий слайд
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');

        // Рассчитываем индекс следующего слайда
        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        // Находим следующий слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        // Отображаем следующий слайд
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    });
});

btnNext.onclick = function () {

}