export class Experiencia{
    id: number;
   empresa:string;
   puesto:string;
   descripcion:string;
   fechaIni:string;
   fechaFin:string;

   constructor(id:number,empresa:string,descripcion:string,puesto:string,fechaIni:string,fechaFin:string){
       this.id=id;
       this.empresa=empresa;
       this.descripcion=descripcion;
       this.puesto=puesto;
       this.fechaIni=fechaIni;
       this.fechaFin=fechaFin;
   }
}