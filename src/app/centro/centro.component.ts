import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input() curso: Curso = {
       id: " ",
       nombre: "  ",
       autor: " ",
       descripcion: " ",
       imagen: " ",
       precio: 0
        

   };

  constructor() { }

  ngOnInit(): void {
  }

}
