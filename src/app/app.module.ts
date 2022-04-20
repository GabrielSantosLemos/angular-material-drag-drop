import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropBasicoComponent } from './components/drag-drop-basico/drag-drop-basico.component';
import { DragDropReordenandoListaComponent } from './components/drag-drop-reordenando-lista/drag-drop-reordenando-lista.component';
import { DragDropEspacoReservadoComponent } from './components/drag-drop-espaco-reservado/drag-drop-espaco-reservado.component';

@NgModule({
  declarations: [AppComponent, DragDropBasicoComponent, DragDropReordenandoListaComponent, DragDropEspacoReservadoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
