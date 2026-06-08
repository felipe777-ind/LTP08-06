class ContaBancaria {
  constructor(titular, saldo, numeroConta) {
    this.titular = titular;
    this.saldo = saldo;
    this.numeroConta = numeroConta;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  exibirSaldo() {
    
    console.log(this.saldo);
  }
}
