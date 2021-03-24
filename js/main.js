$('.skills__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
});

let n = 0;
let skillsEl = [{
        skills: document.querySelector('.skills__html'),
        color: 'orange'
    },
    {
        skills: document.querySelector('.skills__css'),
        color: 'blue'
    },
    {
        skills: document.querySelector('.skills__js'),
        color: 'yellow'
    },
    {
        skills: document.querySelector('.skills__sass'),
        color: 'pink'
    },
    {
        skills: document.querySelector('.skills__gulp'),
        color: 'red'
    },
    {
        skills: document.querySelector('.skills__git'),
        color: 'orange'
    },
]

skillsEl.forEach(el => {
    n += 500
    setTimeout(function () {
        bounce(el.skills, el.color)
    }, 2500 + n)
})


function bounce(skills, color) {
    skills.style.color = color
    skills.style.animation = 'pulse';
    skills.style.animationDuration = 1 + 's';
}

let skillsText = document.querySelectorAll('.skills__text');
skillsText.forEach(el => {
    setTimeout(function () {
        getSkillsTextAnimation(el)
    }, 7000)
})

function getSkillsTextAnimation(el) {
    el.style.animation = 'heartBeat'
    el.style.animationDuration = 5 + 's'
    el.style.animationIterationCount = 'infinite';
}