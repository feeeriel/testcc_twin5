import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TeamsComponent } from './team/teams/teams.component';
import { MyTeamsComponent } from './team/my-teams/my-teams.component';
import { FormTeamComponent } from './team/form-team/form-team.component';

const routes: Routes = [
  { path: '', redirectTo: '/showteams', pathMatch: 'full' },
  { path: 'showmyteams', loadChildren: () => import('./team/team.module').then(m => m.TeamModule),component:MyTeamsComponent },
  { path: 'addteam', loadChildren: () => import('./team/team.module').then(m => m.TeamModule),component:FormTeamComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
