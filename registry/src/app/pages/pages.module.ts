import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CandidatesModule } from './candidates/candidates.module';
import { PartiesModule } from './parties/parties.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ReportModule } from './report/report.module';
import { ResultsModule } from './results/results.module';
import { RolesModule } from './roles/roles.module';
import { TablesModule } from './tables/tables.module';
import { UsersModule } from './users/users.module';
import { PagesComponent } from './pages.component';
import { CitizenHeaderComponent } from '../global/citizen-header/citizen-header.component';
import { JuryHeaderComponent } from '../global/jury-header/jury-header.component';
import { AdminHeaderComponent } from '../global/admin-header/admin-header.component';
import { FooterComponent } from '../global/footer/footer.component';


@NgModule({
  declarations: [
    PagesComponent,
    AdminHeaderComponent,
    JuryHeaderComponent,
    CitizenHeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CandidatesModule,
    PartiesModule,
    PermissionsModule,
    ReportModule,
    ResultsModule,
    RolesModule,
    TablesModule,
    UsersModule
  ]
})
export class PagesModule { }
