class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade, anoDeNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} minha idade é ${this.idade} anos e nasci em ${this.anoDeNascimento}.`);
    }
}

const davidson = new Pessoa('davidson', 39);
const laryssa = new Pessoa('laryssa', 14);

davidson.descrever();
laryssa.descrever();