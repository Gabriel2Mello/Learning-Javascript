function Produto(nome, preco, estoque) {   
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque,
        writable: true,
        configurable: false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true, 
            value: preco,
            writable: true,
            configurable: false
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 300;
delete p1.estoque;

console.log(p1);
console.log(Object.keys(p1));