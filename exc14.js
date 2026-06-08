class Aluno {
  #nota;

  constructor(nota) {
    this.nota = nota;
  }

  get nota() {
    return this.#nota;
  }

  set nota(valor) {
    if (valor >= 0 && valor <= 10) {
      this.#nota = valor;
    } else {
      console.log("Nota inválida");
    }
  }

  static calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
  }
}

