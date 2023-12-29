import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { UpdatePersonFormComponent } from './update-person-form/update-person-form.component';
import { DeletePersonFormComponent } from './delete-person-form/delete-person-form.component';


const routes: Routes = [
  {
    path: '',
    component:PersonListComponent,
  },
  {
    path: 'add',
    component:AddPersonFormComponent,
  },
  {
    path: 'update',
    component:UpdatePersonFormComponent,
  },
  {
    path: 'delete',
    component:DeletePersonFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
