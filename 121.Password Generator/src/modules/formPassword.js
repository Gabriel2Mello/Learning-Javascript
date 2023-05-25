import createPassword from "./generators";

const slider = document.querySelector('.range');
const sliderValue = document.querySelector('.value');

slider.addEventListener('input', (e) => {
    sliderValue.innerHTML = e.target.value;
});

const password = document.querySelector('.password');
const range = document.querySelector('.range');
const useCapitalLetters = document.querySelector('#use-capital-letters-switch');
const useDigits = document.querySelector('#use-digits-switch');
const useSymbols = document.querySelector('#use-symbols-switch');
const generatePassword = document.querySelector('.generate-password');

export default () => {    
    generatePassword.addEventListener('click', () => {
        password.textContent = generate();
    });
};

function generate() {    
    const password = createPassword(
        range.value,
        useCapitalLetters.checked,
        useDigits.checked,
        useSymbols.checked
    );

    return password;
}