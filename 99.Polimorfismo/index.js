// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo <= valor) {
        console.log('Saldo insuficiente');
        console.log(`Saldo atual: R$${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Agência/Banco: ${this.agencia}/${this.conta}`);
    console.log('Saldo: R$' + this.saldo.toFixed(2));
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log('Limite insuficiente');
        console.log(`Limite atual: R$${this.limite}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(12, 33, 0);
contaPoupanca.depositar(15);
contaPoupanca.sacar(50);