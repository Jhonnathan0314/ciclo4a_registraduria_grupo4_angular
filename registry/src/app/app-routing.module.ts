import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './pages/candidate/candidate.component';
import { CreateCandidateComponent } from './pages/create-candidate/create-candidate.component';
import { CreatePartyComponent } from './pages/create-party/create-party.component';
import { CreatePermissionComponent } from './pages/create-permission/create-permission.component';
import { CreateRoleComponent } from './pages/create-role/create-role.component';
import { CreateTableComponent } from './pages/create-table/create-table.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PartyComponent } from './pages/party/party.component';
import { PermissionComponent } from './pages/permission/permission.component';
import { RegisterResultComponent } from './pages/register-result/register-result.component';
import { RegisterComponent } from './pages/register/register.component';
import { PartiesComponent } from './pages/report/parties/parties.component';
import { PercentagesComponent } from './pages/report/percentages/percentages.component';
import { TablesComponent } from './pages/report/tables/tables.component';
import { VotesComponent } from './pages/report/votes/votes.component';
import { ResultComponent } from './pages/result/result.component';
import { RoleComponent } from './pages/role/role.component';
import { TableComponent } from './pages/table/table.component';
import { UpdateCandidateComponent } from './pages/update-candidate/update-candidate.component';
import { UpdatePartyComponent } from './pages/update-party/update-party.component';
import { UpdatePermissionComponent } from './pages/update-permission/update-permission.component';
import { UpdateRoleComponent } from './pages/update-role/update-role.component';
import { UpdateTableComponent } from './pages/update-table/update-table.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path:'candidate',
        component: CandidateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[
  LoginComponent, RegisterComponent, DashboardComponent, 
  CandidateComponent, CreateCandidateComponent, UpdateCandidateComponent, 
  PartyComponent, CreatePartyComponent, UpdatePartyComponent, 
  PermissionComponent, CreatePermissionComponent, UpdatePermissionComponent, 
  RoleComponent, CreateRoleComponent, UpdateRoleComponent, 
  TableComponent, CreateTableComponent, UpdateTableComponent, 
  UserComponent, CreateUserComponent, UpdateUserComponent, 
  ResultComponent, RegisterResultComponent, 
  PercentagesComponent, TablesComponent, VotesComponent, PartiesComponent
]