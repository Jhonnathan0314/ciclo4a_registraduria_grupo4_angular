import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TableComponent } from './table/table.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { UpdateTableComponent } from './update-table/update-table.component';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    TableComponent,
    CreateTableComponent,
    UpdateTableComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    FormsModule,
    MatProgressBarModule
  ]
})
export class TablesModule { }
