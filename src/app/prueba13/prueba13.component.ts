import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../model/curso';


@Component({
  selector: 'app-prueba13',
  templateUrl: './prueba13.component.html',
  styleUrls: ['./prueba13.component.css']
})
export class Prueba13Component implements OnInit {

  @Input() elementos:Curso[]=[];
  seleccionados: string[]=[];
  //seleccionados: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selecc(id: string): void {
   // this.seleccionados++;
   this.seleccionados.push(id);
   console.log(this.seleccionados);
  }

}
