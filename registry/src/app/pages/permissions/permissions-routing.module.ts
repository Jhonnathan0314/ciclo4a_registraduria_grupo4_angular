import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { PermissionComponent } from './permission/permission.component';
import { UpdatePermissionComponent } from './update-permission/update-permission.component';

const routes: Routes = [
  {
    path: 'permission',
    component: PermissionComponent
  },
  {
    path: 'create',
    component: CreatePermissionComponent
  },
  {
    path: 'update',
    component: UpdatePermissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionsRoutingModule { }
