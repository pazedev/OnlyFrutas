// Selecionando os elementos do carousel
const carouselContainers = document.querySelectorAll('.prod');
const prevButtons = document.querySelectorAll('.prev-button');
const nextButtons = document.querySelectorAll('.next-button');

// Função para alternar as imagens dentro de cada div do carousel
function toggleCarouselImages(container, direction) {
    const images = container.querySelectorAll('img');
    let currentImageIndex = 0;

    setInterval(() => {
        images[currentImageIndex].style.display = 'none';

        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        }

        images[currentImageIndex].style.display = 'block';
    }, 2000);
}

// Função para mover as imagens para a esquerda (prev)
function moveImagesPrev(event) {
    const container = event.currentTarget.parentElement.querySelector('.prod');
    toggleCarouselImages(container, 'prev');
}

// Função para mover as imagens para a direita (next)
function moveImagesNext(event) {
    const container = event.currentTarget.parentElement.querySelector('.prod');
    toggleCarouselImages(container, 'next');
}

// Adicionando os eventos de clique aos botões prev e next
prevButtons.forEach((button) => {
    button.addEventListener('click', moveImagesPrev);
});

nextButtons.forEach((button) => {
    button.addEventListener('click', moveImagesNext);
});

// Chamar a função para cada div do carousel
carouselContainers.forEach((container) => {
    toggleCarouselImages(container, 'next');
});


const logoCards = document.querySelectorAll('.logos-card');

logoCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.classList.add('rotate');
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('rotate');
    });
});