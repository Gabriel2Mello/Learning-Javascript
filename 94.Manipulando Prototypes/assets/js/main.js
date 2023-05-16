function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camisa', 50);

p1.desconto(10);
p1.aumento(70);

console.log(p1)

const caneca = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(caneca, Produto.prototype);
caneca.aumento(20);
console.log(caneca);

const p3 = Object.create(Produto.prototype);
console.log(p3);

const produto3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: 42
    },
    preco: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: 15.4
    },
    material: {
        value: 'lã'
    }
});

console.log(produto3);
produto3.aumento(50);
console.log(produto3);

console.log(Object.getOwnPropertyDescriptor(produto3, 'material'));
