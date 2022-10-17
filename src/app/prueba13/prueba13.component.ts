import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../model/curso';




@Component({
  selector: 'app-prueba13',
  templateUrl: './prueba13.component.html',
  styleUrls: ['./prueba13.component.css']
})
export class Prueba13Component implements OnInit {
    @Input() elementos:Curso[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
