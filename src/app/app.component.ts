import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-to-do';
  msg:string='';
  tareas=[
    {'titulo':'lavar los platos', descripcion:'fregar y secar'},
    {'titulo':'Hacer la tarea', descripcion:'examen, completar formulario'},
    {'titulo':'Competar proyecto', descripcion:'pasos en equipo'},
  ];
  model:any={};
  model2:any={};
  hideUpdate:boolean=true;

  agregarTarea():void{
    this.tareas.push(this.model);
    this.msg="Agregado";
  }
  eliminarTarea(i: number):void{
    var answer=confirm('Seguro de eliminar esta información?');
    if(answer){
      this.tareas.splice(i,1);
      this.msg='Información eliminada';
    }
    
  }

  myValue: any;

  editarTarea(i: number):void{
    this.hideUpdate=false;
    this.model2.titulo=this.tareas[i].titulo;
    this.model2.descripcion=this.tareas[i].descripcion;
    this.myValue=i;
  }
  actualizarTarea():void{
    //console.log(this.model2)
    let i=this.myValue;
    for(let j=0;j<this.tareas.length;j++){
      if(i==j){
        this.tareas[i]=this.model2;
        this.model2={};
        this.msg='Correctamente actualizado';
      }
    }
    this.hideUpdate=true;
  }
   closeAlert(){
     this.msg='';
   }
}
