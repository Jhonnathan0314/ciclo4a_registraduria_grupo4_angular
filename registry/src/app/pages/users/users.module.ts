import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MatProgressBarModule
  ]
})
export class UsersModule { }
