class Persona {
  constructor(id, nombre, correo) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
  }

  mostrarInfo() {
    console.log(`ID: ${this.id}, Nombre: ${this.nombre}, Correo: ${this.correo}`);
  }
}

class Instructor extends Persona {
  constructor(id, nombre, correo, especialidad) {
    super(id, nombre, correo);
    this.especialidad = especialidad;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Especialidad: ${this.especialidad}`);
  }
}

class Aprendiz extends Persona {
  constructor(id, nombre, correo, puntaje) {
    super(id, nombre, correo);
    this.puntaje = puntaje;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Puntaje ICFES: ${this.puntaje}`);
  }
}

const profe = new Instructor(1, "pacho", "pacho10@gmail.com", "software");
const estudiante = new Aprendiz(2, "Daniel Mbappe","MBAPEREZ@GMAIL.com", 298);

profe.mostrarInfo();
estudiante.mostrarInfo();
