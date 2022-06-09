export class Educacion{
    id?: number;
   nombre:String;
   descripcion:string;
   titulo:String;
   fechaIni:Date;
   fechaFin:Date;

   constructor(id:number,nombre:string,descripcion:string,titulo:string,fechaIni:Date,fechaFin:Date){
       this.id=id;
       this.nombre=nombre;
       this.descripcion=descripcion;
       this.titulo=titulo;
       this.fechaIni=fechaIni;
       this.fechaFin=fechaFin;
   }
}