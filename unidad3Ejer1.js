class trabajador {
  #suel;  
  #correo; 

  constructor(nombre, sueldo, correo) {
    this.nom = nombre;
    this.#suel = sueldo;
    this.correo = correo; 
  }

  aplicoAumento(porcentaje) {
    this.#suel += this.#suel * porcentaje / 100;
  }

  verInfo() {
    console.log(`Empleado: ${this.nom}`);
    console.log(`Sueldo: ${this.#suel.toFixed(2)}`);
    console.log(`Correo: ${this.#correo}`);
  }

  get correo() {
    return this.#correo;
  }

  
  set correo(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(valor)) {
      this.#correo = valor;
    } else {
      console.error(`Correo inválido: ${valor}`);
    }
  }
}


const emp1 = new trabajador("Daniel Mbappé", 2000, "daniel.mbappe@example.com");
emp1.aplicoAumento(10);
emp1.verInfo();

emp1.correo = "correo-invalido";  
emp1.verInfo();
