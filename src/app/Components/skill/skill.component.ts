
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Interface/SkilInterface';
import { SkillServiceService } from 'src/app/Service/skill-service.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(private skillS:SkillServiceService) { }
  skill:Skill[]=[];
  ngOnInit(): void {
      this.skillS.getSkill().subscribe(data=>this.skill=data);
  }

  enviar(ski:Skill):void{
   let id= localStorage.setItem("id",ski.id!.toString());
   console.log(id);
  }

}
