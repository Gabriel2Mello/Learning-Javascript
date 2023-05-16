const pessoa = { 
    nome: 'Luiz',
    sobrenome: 'Silva'
};

const chave = 'sobrenome'

console.log(pessoa.nome);
console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'Gabriel';
pessoa1.sobrenome = 'Gustavo'
pessoa1.idade = 30

delete pessoa1.nome;
console.log(pessoa1.nome);
console.log(pessoa1[chave]);

pessoa1.FalarSobrenome = function() {
    return `${this.sobrenome} está falando seu sobrenome.`
}

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.FalarSobrenome());
console.log(pessoa1.getDataNascimento());