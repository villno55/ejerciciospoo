class Autor {
  constructor(nom, nacimi) {
    this.nom = nom;
    this.nacimi = nacimi;
  }

  verInfo() {
    console.log(`Autor: ${this.nom} (${this.nacimi})`);
  }
}

class Editorial {
  constructor(nom, city) {
    this.nom = nom;
    this.city = city;
  }

  verInfo() {
    console.log(`Editorial: ${this.nom} - Ciudad: ${this.city}`);
  }
}

class Libro {
  constructor(titulo, autor, edito) {
    this.titulo = titulo;
    this.autor = autor;
    this.edito = edito;
  }

  verInfo() {
    this.autor.verInfo();
    console.log(`Libro: ${this.titulo}`);
    this.edito.verInfo();
  }
}


const aut1 = new Autor("Sthepen King", "EE.UU");
const edito1 = new Editorial("PREHISTON", "MANHATTAN");

const lib1 = new Libro("EL RESPLANDOR", aut1, edito1);


lib1.verInfo();

