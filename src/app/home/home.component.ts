import { Component, OnInit } from '@angular/core';
import {Notas, listaNotas} from '../interfaces/notas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Lista=listaNotas;
  constructor() { }

  ngOnInit(): void {
  }

 // eliminar(){
 //   console.log("Hola Mundo!");
 // }
}
