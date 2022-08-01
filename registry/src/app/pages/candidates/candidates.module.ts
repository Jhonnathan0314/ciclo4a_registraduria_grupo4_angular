import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidateComponent } from './candidate/candidate.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    CandidateComponent,
    CreateCandidateComponent,
    UpdateCandidateComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    FormsModule,
    MatProgressBarModule
  ]
})
export class CandidatesModule { }
