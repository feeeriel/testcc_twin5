import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantsComponent } from './participants/participants.component';


@NgModule({
  declarations: [
    ParticipantsComponent
  ],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    FormsModule
  ]
})
export class ParticipantModule { }
