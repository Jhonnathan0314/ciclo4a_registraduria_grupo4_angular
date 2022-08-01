import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { RegisterResultComponent } from './register-result/register-result.component';
import { UpdateRegisterResultComponent } from './update-register-result/update-register-result.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    ResultComponent,
    RegisterResultComponent,
    UpdateRegisterResultComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    FormsModule,
    MatProgressBarModule
  ]
})
export class ResultsModule { }
