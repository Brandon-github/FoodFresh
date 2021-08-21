let btn__toogle = document.querySelector('.toogle');
let nav__list = document.querySelector('.nav__lista');

btn__toogle.addEventListener("click", () => {
    btn__toogle.classList.toggle('active');
    nav__list.classList.toggle('active');
});