class Pilha {
  #itens = [];

  empilhar(item) {
    this.#itens.push(item);
  }

  desempilhar() {
    return this.#itens.pop();
  }

  topo() {
    return this.#itens[this.#itens.length - 1];
  }

  estaVazia() {
    return this.#itens.length === 0;
  }

  get tamanho() {
    return this.#itens.length;
  }
}
