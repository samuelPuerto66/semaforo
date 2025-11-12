import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Clase } from './clase/clase';
import { Child } from './child/child';
import { Semaforo } from './semaforo/semaforo';
import { NuevoComponente } from './nuevo-componente/nuevo-componente';

@NgModule({
  declarations: [
    App,
    Clase,
    Child,
    Semaforo,
    NuevoComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
