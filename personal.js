const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

// design and programming

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const designprogramming = document.querySelector('.designprogramming');

left.addEventListener('mouseenter', () => {
    designprogramming.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    designprogramming.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    designprogramming.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    designprogramming.classList.remove('hover-right');
});