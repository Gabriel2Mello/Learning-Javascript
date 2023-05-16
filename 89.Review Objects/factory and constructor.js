// Factory
function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criarPessoa('Luiz', 'Silva');

console.log(p1.nomeCompleto);

// Constructor
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Gabriel', 'Gustavo');
console.log(p2);
