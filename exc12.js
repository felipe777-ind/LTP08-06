class Pagamento {
  constructor(valor) {
    this.valor = valor;
  }

  processar() {}
}

class CartaoCredito extends Pagamento {
  constructor(valor, parcelas) {
    super(valor);
    this.parcelas = parcelas;
  }

  processar() {
    console.log(`Pagamento ${this.valor} em ${this.parcelas}x`);
  }
}

class Pix extends Pagamento {
  constructor(valor, chavePix) {
    super(valor);
    this.chavePix = chavePix;
  }

  processar() {
    console.log(`PIX enviado para ${this.chavePix}P`);
  }
}

class Boleto extends Pagamento {
  constructor(valor, codigoDeBarras) {
    super(valor);
    this.codigoDeBarras = codigoDeBarras;
  }

  processar() {
    console.log(`Boleto: ${this.codigoDeBarras}`);
  }
}

function processarTodos(pagamentos) {
  pagamentos.forEach(p => p.processar());
}



