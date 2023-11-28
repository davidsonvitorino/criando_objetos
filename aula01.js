const pessoa = {
    nome: 'Davidson A Vitroino', 
    idade: 39,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

pessoa.nome = 'Laryssa';
pessoa.idade = 14;
pessoa.descrever();