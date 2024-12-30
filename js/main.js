// Элементы на странице
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);

sliderItems.forEach(function (slide, index) {

    // Скрываем все слайды, кроме первого
    if (index !== 0) slide.classList.add('hidden');

    // Добавляем индексы
    slide.dataset.index = index;

    // Клик по слайдам
    slide.addEventListener('click', function () {
        // Скрываем текущий слайд
        this.classList.add('hidden');

        // Рассчитываем индекс следующего слайда
        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        // Находим следующий слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        // Отображаем следующий слайд
        nextSlide.classList.remove('hidden');
    });
});