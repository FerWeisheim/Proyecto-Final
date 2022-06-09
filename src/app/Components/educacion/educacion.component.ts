import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Interface/EducacionInterface';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private educacionS:EducacionService) { }
  educacion:Educacion[]=[];
  ngOnInit(): void {
    this.educacionS.getEducacion().subscribe(data=>this.educacion=data);
  }

  

}
