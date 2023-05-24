const nome = 'Gabriel';
const sobrenome = 'Silva';
const idade = 30;
const cpf = 'asdjknasldjhas';

export const email = 'gabriel_silva@gmail.com';
export const peso = 78.9;

function soma(x, y) {
    return x + y;
}

export default function subtracao(x, y) {
    return x - y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome as nome2, sobrenome, idade, soma };