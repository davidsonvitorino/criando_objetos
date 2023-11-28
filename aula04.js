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

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const davidson = new Pessoa('Davidson', 39);
const laryssa = new Pessoa('Laryssa', 11);

compararPessoas(davidson, laryssa);
