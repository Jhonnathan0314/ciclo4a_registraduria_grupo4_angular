import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePartyComponent } from './create-party/create-party.component';
import { PartyComponent } from './party/party.component';
import { UpdatePartyComponent } from './update-party/update-party.component';

const routes: Routes = [
  {
    path: 'party',
    component: PartyComponent
  },
  {
    path: 'create',
    component: CreatePartyComponent
  },
  {
    path: 'update/:_id',
    component: UpdatePartyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartiesRoutingModule { }
