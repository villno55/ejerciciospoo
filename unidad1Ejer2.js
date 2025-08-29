class student {
  constructor(nombre, materias) {
    this.nombre = nombre;
    this.materias = materias;
  }

  listarMaterias() {
    console.log("2) Materias de " + this.nombre + ": " + this.materias.join(", "));
  }
}

const e1 = new student("pacho", ["arq.software", "js", "fundamentos"]);
e1.listarMaterias();

