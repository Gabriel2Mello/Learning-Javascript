class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado.');            
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado.');            
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);

        this.cor = cor;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, modelo) {
        super(nome);

        this.modelo = modelo;
    }

    ligar() {
        console.log('implementação');
    }
}

const s1 = new Smartphone('iPhone', 'Branco');
console.log(s1);