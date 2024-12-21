import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Participant } from 'src/app/models/participant';


@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent implements OnInit{
team!:Team;
ngOnInit(): void {
  this.team=new Team();
}

addalbum(form: any) {
  if (form.valid) {
    const newAlbum = {
      title: this.team.name,
      level:this.team.level,
      projectdescription:this.team.projectDescription,
      projectname:this.team.projectName,
      participant:this.team.participants,
    
    };
  }
}
}
