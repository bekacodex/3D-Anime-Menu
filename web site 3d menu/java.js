const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

//

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})


//////////////////////////////////////////////////

function createBox() {

    let span = document.createElement('span');

    span.classList.add('animated-box');

    let size = Math.random() * 80;

    span.style.height = 40 + size + 'px';
    span.style.width = 40 + size + 'px';

    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';

    document.querySelector('.gradient-baclgroud').appendChild(span);

    setTimeout(() => {
        span.remove();

    }, 3000)


}
setInterval(createBox, 400);