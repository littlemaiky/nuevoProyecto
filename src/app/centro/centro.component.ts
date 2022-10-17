import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input() curso: Curso={
    id: "",
    nombre: "",
    autor: "",
    descripcion: "",
    imagen: "",
    precio: 0
  };
//desde aca saldra child a parent     
@Output() pressButton= new EventEmitter();
//creando un emisor de eventos. sera esuchado por el parent
//para activar el output se enlaza necesariamente a un evento
  constructor() { }

  ngOnInit(): void {
  }
//se ejecuta cuando presiones el boton en la consola
  clickAgregar(id: string): void {
    console.log("click");
    //es para emitir un evento(eventemiter) el evento se ejecute
    this.pressButton.emit(id);
    
    
  }

}
