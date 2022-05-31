export class Educacion{
    id?: number;
   correo:String;
   telefono:Number;
   linkedin:String;
   discord:String;

   constructor(id:number,correo:string,telefono:number,linkedin:string,discord:string){
   this.id=id;
   this.correo=correo;
   this.telefono=telefono;
   this.linkedin=linkedin;
   this.discord=discord;
   }
}