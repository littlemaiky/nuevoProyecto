import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-prueba12',
  templateUrl: './prueba12.component.html',
  styleUrls: ['./prueba12.component.css']
})
export class Prueba12Component implements OnInit {

  cursos: Curso[] = [

    {
    id: "01",
    nombre: "Vincent Van Gogh",
    autor: "Leonardo da Vinci",
    descripcion: "La Gioconda o Mona Lisa es uno de los retratos más emblemáticos de la historia de la pintura",
    imagen: "/assets/img/1.png",
    precio: 10000000
    },

    {
      id: "02",
      nombre: "El Beso",
      autor: "Vincent Van Gogh",
      descripcion: "Es un óleo con laminillas de oro y estaño sobre lienzo de 180 x 180 centímetros, realizado entre 1907-08",
      imagen: "/assets/img/2.png",
      precio: 10000000
      },

    {
      id: "03",
      nombre: "La Dama de Armiño",
      autor: "Vincent Van Gogh",
      descripcion: "La modelo ha sido identificada con Cecilia Gallerani, retratada cuando era la amante de Ludovico Sforza, duque de Milán y cuando Leonardo estaba a su servicio.",
      imagen: "/assets/img/3.png",
      precio: 10000000
        },
    {
       id: "04",
       nombre: "El Grito",
       autor: "Vincent Van Gogh",
       descripcion: "La versión más famosa se encuentra en la Galería Nacional de Noruega y fue completada en 1893.​",
       imagen: "/assets/img/4.png",
       precio: 10000000
        },

    {
       id: "05",
       nombre: " La Creación de Adán",
       autor: "Vincent Van Gogh",
       descripcion: "La Creacion de Adán es el elemento central en el gran fresco de Miguel Ángel (o Michelangelo) en la Capilla Sixtina.",
       imagen: "/assets/img/5.png",
       precio: 10000000
         },
    {
       id: "06",
       nombre: " La Última Cena",
       autor: "Vincent Van Gogh",
       descripcion: "La última cena representa el momento cuando Jesús le dice a sus discípulos que uno de ellos lo traicionará.",
       imagen: "/assets/img/6.png",
       precio: 10000000
         },


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
