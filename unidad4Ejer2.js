class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  sonido() {
    console.log(`${this.nom} ladra.`);
  }
}

class Perro extends Animal {
  constructor(nom, rz) {
    super(nom);
    this.rz = rz;
  }

  sonido() {
    console.log(`${this.nom} dice: woof woof!`);
  }

  mostrarRz() {
    console.log(`Raza: ${this.rz}`);
  }
}

class Gato extends Animal {
  constructor(nom, cl) {
    super(nom);
    this.cl = cl;
  }

  sonido() {
    console.log(`${this.nom} ronronea: grumm grumm.`);
  }

  mostrarCl() {
    console.log(`Color: ${this.cl}`);
  }
}

const p = new Perro("perro", "prewstiom colombiano");
const g = new Gato("panda", "blanco y negro");

p.sonido();
p.mostrarRz();

console.log("---");

g.sonido();
g.mostrarCl();



