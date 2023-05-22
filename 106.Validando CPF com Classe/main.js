class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });

        Object.defineProperty(this, 'cpfParcial', {
            writable: true,
            enumerable: false,
            configurable: false,
            value: this.cpfLimpo.slice(0, -2)
        });
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    valido() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;

        this.criaDigitos();
        return this.cpfLimpo === this.cpfParcial;
    }

    criaDigitos() {
        const cpfArray = Array.from(this.cpfParcial);
        
        let index = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, value) => ac += (Number(value) * index--), 0); 
        
        let digit = (11 - (total % 11));        
        this.cpfParcial = this.cpfParcial + (digit > 9 ? 0 : digit);

        if(this.cpfParcial.length === 11) return;

        this.criaDigitos();
    }
}

const cpf = new ValidaCPF('705.484.450-52');
//const cpf = new ValidaCPF('111.111.111-11');

if (cpf.valido()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}
