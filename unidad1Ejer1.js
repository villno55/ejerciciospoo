class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  calcularArea() {
    return 3.14 * this.radio * this.radio;
  }
}

const c1 = new Circulo(5);
console.log("1) Área del círculo:", c1.calcularArea());

