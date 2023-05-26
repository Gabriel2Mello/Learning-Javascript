const mod1 = require('./module1');
const outroNome = mod1.falaNome;
const { nome, sobrenome, falaNome } = require('./module1');
const { Pessoa } = require('./module1');

const path = require('path');
const axios = require('axios');

console.log(nome, sobrenome)
console.log(mod1);
outroNome();

const p1 = new Pessoa(nome);
console.log(p1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response))
//     .catch(e => console.log(e));