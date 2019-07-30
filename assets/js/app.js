// functions

function toggleNavbarBg(){
    if (window.pageYOffset > 0) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

function removeClass(element){
    if (window.pageYOffset > 0) {
        element.classList.remove('active');
    }
}

function addClass(element){
    if (window.pageYOffset > 0) {
        element.classList.add('active');
    }
}

// toggle mobile navbar menu

const open = document.querySelector('#open-menu');
const close = document.querySelector('#close-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const header = document.querySelector('header');

open.addEventListener('click', (e) =>{
    e.preventDefault();
    menuOverlay.classList.add('active');
    document.body.classList.add('overflow-hidden');
    open.style.display = 'none';
    close.style.display = 'block';
    removeClass(header);
});

close.addEventListener('click', (e) =>{
    e.preventDefault();
    menuOverlay.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
    close.style.display = 'none';
    open.style.display = 'block';
    addClass(header);
});

// solid bg navbar after scroll

document.addEventListener('scroll', () => {
    toggleNavbarBg()
});

// fade in hero image - hero section

const hero = document.querySelector('#hero');

hero.classList.remove('hidden');

// scroll to facts section on click - facts section

const heroButton = document.querySelector('#hero-btn');
const factsSection = document.querySelector('#facts');

heroButton.addEventListener('click', () => {
    window.scrollTo({
        top: factsSection.offsetTop - window.getComputedStyle(header).getPropertyValue('height').slice(0,2),
        behavior: 'smooth'
    });
});

// flip card on click - team section

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    })
});

const btnForm = document.querySelector('#btn-form');
const inputs = document.querySelectorAll('.form-field');

// form validation
inputs.forEach( input => {

    btnForm.addEventListener('click', (e) => {
        e.preventDefault();

        if (input.value === '') {
            input.classList.remove('uk-form-success')
            input.classList.add('uk-form-danger')
            input.previousElementSibling.style.display = 'block';
        }
        
        if (input.value !== '') {
            input.classList.remove('uk-form-danger')
            input.classList.add('uk-form-success')
            input.previousElementSibling.style.display = 'none';
        }
    })
})


