const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`)
    }
};

const beber = { 
    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
};

//const pessoaPropotype = { ...falar, ...beber, ...comer };
const pessoaPropotype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPropotype, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        }
    });
}

const p1 = criaPessoa('Jorel', 'Tadeu');
console.log(p1);
p1.falar();
p1.beber();
p1.comer();