class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGasto(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

}

const corola = new Carro('Toiota', 'Preto', (1/10));
console.log(corola.calcularGasto(330, 5));
const up = new Carro('Wolkvagem', 'branco', 1/17);
console.log(up.calcularGasto(330, 5.29));

