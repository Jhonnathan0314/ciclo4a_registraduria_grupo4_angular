import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoleComponent } from './create-role/create-role.component';
import { RoleComponent } from './role/role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';

const routes: Routes = [
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'create',
    component: CreateRoleComponent
  },
  {
    path: 'update/:_id',
    component: UpdateRoleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
