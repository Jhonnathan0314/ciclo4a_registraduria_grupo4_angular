import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTableComponent } from './create-table/create-table.component';
import { TableComponent } from './table/table.component';
import { UpdateTableComponent } from './update-table/update-table.component';

const routes: Routes = [
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'create',
    component: CreateTableComponent
  },
  {
    path: 'update/:_id',
    component: UpdateTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
