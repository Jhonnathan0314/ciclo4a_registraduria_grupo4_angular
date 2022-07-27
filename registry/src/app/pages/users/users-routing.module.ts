import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { 
    path: 'user', 
    component: UserComponent
  },
  { 
    path: 'create', 
    component: CreateUserComponent
  },
  { 
    path: 'update/:_id', 
    component: UpdateUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
