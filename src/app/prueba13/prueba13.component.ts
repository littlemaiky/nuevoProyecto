import { Component, OnInit } from '@angular/core';
import { curso } from '../model/curso';

@Component({
  selector: 'app-prueba13',
  templateUrl: './prueba13.component.html',
  styleUrls: ['./prueba13.component.css']
})
export class Prueba13Component implements OnInit {

  cursos: curso[] = [

    {
    id: "01",
    nombre: "MONALISA",
    autor: "JUAN",
    descripcion: "obra maestra",
    imagen: ""
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
