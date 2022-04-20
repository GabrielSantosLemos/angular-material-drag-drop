import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-espaco-reservado',
  templateUrl: './drag-drop-espaco-reservado.component.html',
  styleUrls: ['./drag-drop-espaco-reservado.component.scss'],
})
export class DragDropEspacoReservadoComponent implements OnInit {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
