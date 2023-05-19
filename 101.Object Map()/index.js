const pessoas = [
    { id: 3, nome: 'Luciano' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' }
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));

for (const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome);
}

for (const chaves of novasPessoas.keys()) {
    console.log(chaves);
}

novasPessoas.delete(2);
for (const values of novasPessoas.values()) {
    console.log(values);
}
