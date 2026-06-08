class Usuario {
  #senha;

  constructor(nome, senha) {
    this.nome = nome;
    this.#senha = senha;
  }

  autenticar(senha) {
    return senha === this.#senha;
  }

  alterarSenha(senhaAtual, novaSenha) {
    if (senhaAtual === this.#senha) {
      this.#senha = novaSenha;
    }
  }
}