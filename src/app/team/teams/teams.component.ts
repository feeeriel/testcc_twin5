import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  albums: Team[] = []; 
  subscribers!: Subscription;
  constructor(
    private router: Router,
    private _consumer:TeamsComponent
  ) {}
  
}
