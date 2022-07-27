import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterResultComponent } from './register-result/register-result.component';
import { ResultComponent } from './result/result.component';
import { UpdateRegisterResultComponent } from './update-register-result/update-register-result.component';

const routes: Routes = [
  { 
    path: 'result', 
    component: ResultComponent
  },
  { path: 'register',
    component:RegisterResultComponent
  },
  { 
    path: 'update/:_id',
    component:UpdateRegisterResultComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
