/* Selección de elementos del DOM */
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

/* Evento para el botón "siguiente" */
nextBtn.onclick = () => {
    // Remover clase active de todos los slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Incrementar el número de slide
    slideNumber++;

    // Volver al primer slide si llegamos al final
    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    // Activar el slide actual
    slides[slideNumber].classList.add('active');
}

/* Evento para el botón "anterior" */
prevBtn.onclick = () => {
    // Remover clase active de todos los slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Decrementar el número de slide
    slideNumber--;

    // Ir al último slide si estamos en el primero
    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    // Activar el slide actual
    slides[slideNumber].classList.add('active');
}
