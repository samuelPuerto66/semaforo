import { Component, ElementRef, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('samu');
  cambiarC(parrafo:HTMLParagraphElement){
    parrafo.style.color = 'red';
  }
  cambiarT(parrafo:HTMLParagraphElement){
    parrafo.style.color = 'green';
  }
}

