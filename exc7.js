class Animal {
  constructor(nome, som) {
    this.nome = nome;
    this.som = som;
  }

  emitirSom() {
    console.log(this.som);
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome, "Au Au");
    this.raca = raca;
  }

  emitirSom() {
    console.log(`${this.nome}: ${this.som}`);
  }
}