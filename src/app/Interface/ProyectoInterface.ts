export class Proyecto {
    id:number;
    proyecto:string;
    descripcion:string;
    urlSourceCode:string;
        
    
    constructor(id:number,proyecto:string,descripcion:string,urlSourceCode:string){
         this.id=id;
         this.proyecto=proyecto;
         this.descripcion=descripcion;
         this.urlSourceCode=urlSourceCode;
    }
}