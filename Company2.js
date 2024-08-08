class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, eu sou ${this.nome} e sou um(a) ${this.cargo}.`;
    }
  
    trabalhar() {
      return `Estou trabalhando como ${this.cargo}.`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      return `Estou gerenciando o departamento de ${this.departamento}.`;
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      return `Estou programando em ${this.linguagem}.`;
    }
  }
  
  function exibirErro(erro) {
    const erroElement = document.getElementById('erro');
    erroElement.textContent = `Erro: ${erro.message}`;
    erroElement.style.display = 'block';
  }
  
  function criarFuncionarios() {
    try {
      const nome = document.getElementById('nome').value;
      const idade = parseInt(document.getElementById('idade').value);
      const cargo = document.getElementById('cargo').value;
      let departamento = '';
      let linguagem = '';
  
      if (cargo === 'Gerente') {
        departamento = document.getElementById('departamento').value;
        if (!departamento) {
          throw new Error('Departamento é obrigatório para gerentes');
        }
        const gerente = new Gerente(nome, idade, cargo, departamento);
        document.getElementById('resultado').textContent = `${gerente.seApresentar()} ${gerente.trabalhar()} ${gerente.gerenciar()}`;
      } else if (cargo === 'Desenvolvedor') {
        linguagem = document.getElementById('linguagem').value;
        if (!linguagem) {
          throw new Error('Linguagem é obrigatória para desenvolvedores');
        }
        const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
        document.getElementById('resultado').textContent = `${desenvolvedor.seApresentar()} ${desenvolvedor.trabalhar()} ${desenvolvedor.programar()}`;
      } else {
        throw new Error('Cargo inválido');
      }
    } catch (erro) {
      exibirErro(erro);
    }
  }
  
  document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    criarFuncionarios();
  });