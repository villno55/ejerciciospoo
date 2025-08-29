class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarInfo() {
    console.log(`${this.nombre} - $${this.precio}`);
  }
}

class Pedido {
  constructor() {
    this.productos = [];
  }

  agregarProducto(produc) {
    this.productos.push(produc);
  }

  mostrarPedido() {
    console.log("Productos en el pedido:");
    this.productos.forEach((produc, i) => {
      console.log(`${i + 1}. ${produc.nombre} - $${produc.precio}`);
    });
  }
}


const produc1 = new Producto("gorra", 20);
const produc2 = new Producto("pañuelo", 5);
const produc3 = new Producto("Zapatos", 60);
const produc4 = new Producto("medias", 5);
const produc5 = new Producto("Chaqueta", 80);
const produc6 = new Producto("Bufanda", 12);


const pedido1 = new Pedido();
pedido1.agregarProducto(produc1);
pedido1.agregarProducto(produc2);
pedido1.agregarProducto(produc3);
pedido1.agregarProducto(produc4);
pedido1.agregarProducto(produc5);
pedido1.agregarProducto(produc6);

pedido1.mostrarPedido();
