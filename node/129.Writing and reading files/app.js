const path = require('path');
const pathFile = path.resolve(__dirname, 'teste.json');
const write = require('./modules/write');
const read = require('./modules/read');

const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Barbara' }
]
const json = JSON.stringify(pessoas, '', 2);

//write(pathFile, json);

async function readFile(rootPath) {
    const content = await read(rootPath);
    showContent(content);
}

function showContent(content) {
    content = JSON.parse(content);
    
    content.forEach(value => console.log(value.nome));
}

readFile(pathFile);

//const contentFile = readFile(pathFile)
//                        .then(content => console.log(content))
//                        .catch(e => console.log(e));