import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyecto002';
  log= 'Esperando cambios';

  art={
    codigo:0,
    descripcion:"",
    precio:0
  }

  productos: any[] = [{codigo:1, descripcion:'papas', precio:10.55},
  {codigo:2, descripcion:'manzanas', precio:12.1},
  {codigo:3, descripcion:'melon', precio:52.3},
  {codigo:4, descripcion:'cebollas', precio:17},
  {codigo:5, descripcion:'calabaza', precio:20}];

  agregarProducto() {
    const existeCodigo = this.productos.some(producto => producto.codigo == this.art.codigo);
    /* se utiliza para comprobar si existe al menos un producto en el arreglo cuyo código coincide con el código del producto almacenado en this.art.codigo soltando un boolean */
    if (existeCodigo) {
      console.log('El código de producto ya existe.');
      this.log="El código de producto ya existe.";
      return;
    }
    const producto = {codigo: this.art.codigo, descripcion:this.art.descripcion,precio : this.art.precio };
    this.productos.push(producto);
    /* Push es una funcion que permite agregar el valor al final del arreglo*/
    this.log="Producto agregado correctamente";
    this.art.codigo=0;
    this.art.descripcion = "";
    this.art.precio =0;

}

  deletePrice(index: number){
    this.productos.splice(index,1 );
    /* permite modificar el contenido de un arreglo a partir de
    especificar la posicion del elemento y el uno indica cuantos valores se desean eliminar, osea solo 1  */
    this.log="Se elimino un producto.";
  }

  seleccionar(codigo:number, descripcion:string, price:number){
    this.art.codigo = codigo;
    this.art.descripcion = descripcion;
    this.art.precio = price;
    this.log="Se selecciono un producto.";
  }

  modificarProducto(codigo: number, nuevaDescripcion: string, nuevoPrecio: number) {
    const index = this.productos.findIndex(producto => producto.codigo == codigo);
    /* a partir de la función findIndex esto permite buscar en el arreglo algun valor que
    coincida con el codigo que tenemos para ser analizado */
    if (index === -1) {
      console.log('El código de producto no existe.');
      this.log="Este codigo de producto no existe.";
      return;
    }

    this.productos[index].descripcion = nuevaDescripcion;
    this.productos[index].precio = nuevoPrecio;
    this.log="Se Modifico un producto.";
    this.art.codigo=0;
    this.art.descripcion = "";
    this.art.precio =0;
  }




}
