// 705.484.450-52
export default class ValidaCPF {
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

        const digito1 = ValidaCPF.criaDigito(this.cpfParcial)
        const digito2 = ValidaCPF.criaDigito(this.cpfParcial + digito1);

        return this.cpfLimpo === this.cpfParcial + digito1 + digito2;
    }

    static criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        
        let index = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, value) => ac += (Number(value) * index--), 0); 
        
        let digit = (11 - (total % 11));
        return digit > 9 ? 0 : digit;  
    }
}