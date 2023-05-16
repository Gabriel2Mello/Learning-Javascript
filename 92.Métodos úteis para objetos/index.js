const produto = { nome: 'Produto', preco: 1.2 };
const caneca = {
    ...produto,
    material: 'porcelana'
};

caneca.nome = 'caneca';
console.log(caneca);


Object.defineProperty(caneca, 'nome', {
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'));

caneca.nome = 'Outro';
console.log(caneca);
console.log(Object.values(caneca));
console.log(Object.entries(caneca));