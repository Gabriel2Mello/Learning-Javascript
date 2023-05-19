/**
 * 705.484.450-52 
 * 
 */

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valido = function() {
    const cpf = this.cpfLimpo.slice(0, -2);

    const digit1 = this.criaDigito(cpf);
    const digit2 = this.criaDigito(cpf + digit1);

    const novoCpf = cpf + digit1 + digit2;
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
      
    let index = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, value) => ac += (Number(value) * index--), 0); 
    
    const digit = (11 - (total % 11));
    return digit > 9 ? 0 : digit;    
}

const cpf = new ValidaCPF('705.484.450-52');

if (cpf.valido()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}


