class ContaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    this.#saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  mostrarSaldo() {
    console.log(`Saldo: R$${this.#saldo}`);
  }

  static converterParaDolarCanadense(reais) {
    return reais * 0.25;
  }
}

new ContaBancaria(1000).mostrarSaldo();
new ContaBancaria(1500).mostrarSaldo();
new ContaBancaria(1200).mostrarSaldo();

console.log(`Saldo em dólar canadense: CAD$${ContaBancaria.converterParaDolarCanadense(1200)}`);
