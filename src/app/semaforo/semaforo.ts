import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  standalone: false,
  templateUrl: './semaforo.html',
  styleUrl: './semaforo.css'
})
export class Semaforo {

  
  cambiarRojo(parr1: HTMLParagraphElement, parr2: HTMLParagraphElement, parr3: HTMLParagraphElement) {
    parr1.style.backgroundColor = 'red';
    parr2.style.backgroundColor = 'white';
    parr3.style.backgroundColor = 'white';
  }

  cambiarAmarillo(parr1: HTMLParagraphElement, parr2: HTMLParagraphElement, parr3: HTMLParagraphElement) {
    parr1.style.backgroundColor = 'red';
    parr2.style.backgroundColor = 'yellow';
    parr3.style.backgroundColor = 'white';
  }

  cambiarVerde(parr1: HTMLParagraphElement, parr2: HTMLParagraphElement, parr3: HTMLParagraphElement) {
    parr1.style.backgroundColor = 'white';
    parr2.style.backgroundColor = 'white';
    parr3.style.backgroundColor = 'green';
  }
}


