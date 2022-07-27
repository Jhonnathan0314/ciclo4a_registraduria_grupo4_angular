import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { TablesComponent } from './tables/tables.component';
import { PercentagesComponent } from './percentages/percentages.component';
import { VotesComponent } from './votes/votes.component';
import { PartiesComponent } from './parties/parties.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TablesComponent,
    PercentagesComponent,
    VotesComponent,
    PartiesComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule
  ]
})
export class ReportModule { }
