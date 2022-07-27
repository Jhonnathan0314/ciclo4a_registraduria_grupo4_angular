import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';

const routes: Routes = [
  {
    path: 'candidate',
    component: CandidateComponent
  },
  {
    path: 'create',
    component: CreateCandidateComponent
  },
  {
    path: 'update/:_id',
    component: UpdateCandidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
