
class Livro {
  constructor(titulo) {
    this.titulo = titulo;
  }

  toString() {
    return Livro= ` ${this.titulo}`;
  }
}

class Filme {
  constructor(titulo) {
    this.titulo = titulo;
  }

  toString() {
    return Filme=`${this.titulo}`;
  }
}

class Musica {
  constructor(titulo) {
    this.titulo = titulo;
  }

  toString() {
    return Musica =` ${this.titulo}`;
  }
}

const itens = [
  new Livro("Dom Casmurro"),
  new Filme("Vingadores"),
  new Musica("Evidências")
];

itens.forEach(item => console.log(item.toString()));

