import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.scss']
})
export class EditarNotaComponent implements OnInit {

  ruta2:any;
  titulo:string="tareaCerrada";

  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta2=this.ruta.params.subscribe(parametros=>{
      this.titulo=parametros['titulo'];
      console.log("parametros "+this.titulo);
      });
  }

}
