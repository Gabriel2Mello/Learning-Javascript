function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}; 

const pessoa1 = new Pessoa('Luiz', 'Silva');
const pessoa2 = new Pessoa('Maria', 'Luiza');
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
console.log(pessoa1.nomeCompleto())