import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartiesRoutingModule } from './parties-routing.module';
import { PartyComponent } from './party/party.component';
import { CreatePartyComponent } from './create-party/create-party.component';
import { UpdatePartyComponent } from './update-party/update-party.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PartyComponent,
    CreatePartyComponent,
    UpdatePartyComponent
  ],
  imports: [
    CommonModule,
    PartiesRoutingModule,
    FormsModule
  ]
})
export class PartiesModule { }
