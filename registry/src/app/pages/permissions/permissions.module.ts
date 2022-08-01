import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionComponent } from './permission/permission.component';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { UpdatePermissionComponent } from './update-permission/update-permission.component';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    PermissionComponent,
    CreatePermissionComponent,
    UpdatePermissionComponent
  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    FormsModule,
    MatProgressBarModule
  ]
})
export class PermissionsModule { }
