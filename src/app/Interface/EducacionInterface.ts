export class Educacion{
    id: number;
   nombre:String;
   descripcion:string;
   titulo:String;
   fechaIni:string;
   fechaFin:string;

   constructor(id:number,nombre:string,descripcion:string,titulo:string,fechaIni:string,fechaFin:string){
       this.id=id;
       this.nombre=nombre;
       this.descripcion=descripcion;
       this.titulo=titulo;
       this.fechaIni=fechaIni;
       this.fechaFin=fechaFin;
   }
}