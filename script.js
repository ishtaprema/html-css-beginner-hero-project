console.log('JS is connected')

const mainHeading = document.querySelector('h1')
console.log(mainHeading);

const aboutSection = document.querySelector('#about')
console.log(aboutSection)

const firstExperienceCard = document.querySelector('.experience-card')
console.log(firstExperienceCard)

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