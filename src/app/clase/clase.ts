import { Component } from '@angular/core';

@Component({
  selector: 'app-clase',
  standalone: false,
  templateUrl: './clase.html',
  styleUrl: './clase.css',
})
export class Clase {

  mensaje: string = '';
  texto: string = '';
usuario: string = '';
  guardarV(nombre: string, edad: string, telefono: string) {
    this.mensaje = " El nombre es : " + nombre + ",  La edad es: " + edad + " y El telefono es: " + telefono;
  }

mostrarTexto(texto:string, usuario:string){ {
    console.log(texto);
    this.mensaje=texto+usuario;
  }
}

}
