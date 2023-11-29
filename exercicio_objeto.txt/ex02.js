class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (this.altura * this.altura));
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return('Você está Abaixo do Peso');
        } else if(imc >= 18.5 && imc < 25) {
            return('Você está no Peso Ideal');
        } else if(imc >= 25 && imc < 30) {
            return('Você está Acima do Peso');
        } else if(imc >= 30 && imc < 40) {
            return('Você está Obeso');
        } else {
            return('Você está com Obesidade Mórbida')
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcularImc());
const davidson = new Pessoa('Davidson', 78, 1.70);
console.log(davidson.classificarImc());



