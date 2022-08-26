export class Proyecto {
    id:number;
    proyecto:string;
    descripcion:string;
    urlSourceCode:string;
    img:string;
        
    
    constructor(id:number,proyecto:string,descripcion:string,urlSourceCode:string,img:string){
         this.id=id;
         this.proyecto=proyecto;
         this.descripcion=descripcion;
         this.urlSourceCode=urlSourceCode;
         this.img=img;
    }
}