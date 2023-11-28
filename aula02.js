class Pessoa { //Class -> é uma definição de como deve ser o objeto
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

//Instância-> é uma ocorrência daquele objeto
const davidson = new Pessoa();
davidson.nome = 'Davidson Alves Vitorino';
davidson.idade = 39;

const laryssa = new Pessoa();
laryssa.nome = 'Laryssa Kelle Loureiro Vitorino'
laryssa.idade = 14;

davidson.descrever();
laryssa.descrever();