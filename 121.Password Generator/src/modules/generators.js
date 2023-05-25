const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const newCapitalLetter = () => String.fromCharCode(rand(65, 91));
const newLetter = () => String.fromCharCode(rand(97, 123));
const newDigit = () => String.fromCharCode(rand(48, 58));

const symbols = '@!$%&*';
const newSymbol = () => symbols[rand(0, symbols.length)];


export default function createPassword(length, useCapital, useDigits, useSymbols) {
    const passwordArray = [];

    length = Number(length);
    for (let i = 0; i < length; i++) {
        useCapital && passwordArray.push(newCapitalLetter());
        passwordArray.push(newLetter());
        useDigits && passwordArray.push(newDigit());
        useSymbols && passwordArray.push(newSymbol());
    }

    return passwordArray.join('').slice(0, length);
}