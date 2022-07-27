import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartiesComponent } from './parties/parties.component';
import { PercentagesComponent } from './percentages/percentages.component';
import { TablesComponent } from './tables/tables.component';
import { VotesComponent } from './votes/votes.component';

const routes: Routes = [
  { 
    path: 'tables',
    component:TablesComponent
  },
  { 
    path: 'percentages',
    component:PercentagesComponent
  },
  { 
    path: 'votes',
    component:VotesComponent
  },
  { 
    path: 'parties',
    component:PartiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
