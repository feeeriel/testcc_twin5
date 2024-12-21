import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { FormTeamComponent } from './form-team/form-team.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { TeamsComponent } from './teams/teams.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
