import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre = 'Jonathan';
apellido = 'Macías';
loadingVisible = false;

constructor(private ruta: Router ){

}

visualizarLoading(){
  this.loadingVisible = true;
  setTimeout(()=> {
    this.loadingVisible = false;
  },2000)
}

IrPaginaTabla(){
  this.ruta.navigate(['tabla']);
}
}
