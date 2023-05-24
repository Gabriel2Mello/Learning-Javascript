//import { nome2, sobrenome as ultimoNome, idade, soma, Pessoa } from './module1';
import subtracao, { nome2, sobrenome as sobrenome2, idade, soma, Pessoa} from './module1'

const sobrenome = 'Pedro';

console.log(nome2, sobrenome2, idade);
console.log(soma(5,5));

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);

console.log(subtracao(10,5));