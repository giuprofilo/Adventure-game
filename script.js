const dino = document.querySelector('.dino');
const cacto = document.querySelector('.cacto');

const jump = () => {
    dino.classList.add('jump');

    setTimeout(() => {

        dino.classList.remove('jump');

    }, 800);
}

const loop = setInterval (() => {
    const cactoPosition = cacto.offsetLeft;
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');

    console.log(cactoPosition);

    if (cactoPosition <= 100 && cactoPosition > 0 && dinoPosition < 80) {
        cacto.style.animation = 'none';
        cacto.style.left = `${cactoPosition}px`;

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
