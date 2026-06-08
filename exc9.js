
class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidade = 0;
  }

  acelerar() {
    this.velocidade += 10;
  }

  frear() {
    this.velocidade -= 10;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, combustivel) {
    super(marca, modelo);
    this.combustivel = combustivel;
  }
}

class CarroEletrico extends Carro {
  constructor(marca, modelo, bateriaKwh) {
    super(marca, modelo, null);
    this.bateriaKwh = bateriaKwh;
  }

  acelerar() {
    super.acelerar();
    this.bateriaKwh--;
  }
}
