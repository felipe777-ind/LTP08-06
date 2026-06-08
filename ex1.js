class Pessoa {
  constructor(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }

  fazerAniversario() {
    this.idade++;
  }
}
