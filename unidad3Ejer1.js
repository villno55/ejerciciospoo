class trabajador {
  #suel; 

  constructor(nombre, sueldo) {
    this.nom = nombre;
    this.#suel = sueldo;
  }

  aplicoAumento(porcentaje) {
    this.#suel += this.#suel * porcentaje / 100;
  }

  verInfo() {
    console.log("el empleado:", this.nom, "tiene este sueldo:", this.#suel);
  }
}

const emp1 = new trabajador("Daniel Mbappe", 2000);
emp1.aplicoAumento(10);
emp1.verInfo();
