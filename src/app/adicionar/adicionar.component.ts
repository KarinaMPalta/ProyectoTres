import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  formulario:FormGroup;
  titulo:any;
  lista:Array<String>=[];

  constructor(public fb:FormBuilder) {
    this.formulario=this.fb.group({
      titulo:['', [Validators.required, Validators.maxLength(50)]],
      estado:['', Validators.required],
      descripcion:['', [Validators.required, Validators.maxLength(150)]]
    });
   }

  ngOnInit(): void {
    this.titulo=this.formulario.get("titulo") as FormGroup;
  }


  anadir(){
    this.lista.push(this.titulo.value)
    console.log(this.lista);
  }

  eliminar(){
    this.lista.forEach((item,index)=>{
      if(this.titulo.value==item) this.lista.splice(index,1);
    });
  }
}
