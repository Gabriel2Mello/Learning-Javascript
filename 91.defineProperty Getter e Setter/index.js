function Produto(nome, preco, estoque) {   
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                console.log('Not a number');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'estoque';

//console.log(p1);
console.log(p1.estoque);

function criaProduto(nome) {
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            if (typeof valor !== 'string') {
                console.log('Not a string');
                return;
            }
            nome = valor;
        }
    };
};

const p2 = criaProduto('Blusa');
p2.nome = 2;
console.log(p2.nome);