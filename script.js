console.log('JS is connected')

const mainHeading = document.querySelector('h1')
console.log(mainHeading);

const aboutSection = document.querySelector('#about')
console.log(aboutSection)

const firstExperienceCard = document.querySelector('.experience-card')
console.log(firstExperienceCard)

//----- Change theme -----

const body = document.querySelector('body')
const themeToggleButton = document.querySelector('#theme-toggle')

console.log(body)
console.log(themeToggleButton)

themeToggleButton.addEventListener('click', function () {
    const isDark = body.classList.toggle('dark-theme');

    if (isDark) {
        themeToggleButton.textContent = 'Light mode';
    } else {
        themeToggleButton.textContent = 'Dark mode';
    }
});


//----- Greeting Form -----

const greetingForm = document.querySelector('#greeting-form')
const nameInput = document.querySelector('#name-input')
const greetingMessage = document.querySelector('#greeting-message')

const hiClickCountSpan = document.querySelector('#hi-click-count')
let hiClickCount = 0

const savedhiClickCount = localStorage.getItem('hiClickCount')
if (savedhiClickCount !== null) {
    hiClickCount = Number(savedhiClickCount)
    hiClickCountSpan.textContent = hiClickCount
}

greetingForm.addEventListener('submit', function (event) {
    event.preventDefault();

const name = nameInput.value.trim();

if (name === '') {
    greetingMessage.textContent = 'Hello! Nice to see you here 👋';
} else {
    greetingMessage.textContent = 'Hello, ' + name + '! Nice to see you here 👋';
}

hiClickCount = hiClickCount + 1;
hiClickCountSpan.textContent = hiClickCount;
localStorage.setItem('hiClickCount', hiClickCount);
});