import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdatePatientComponent } from './add-update-patient/add-update-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  {path:'', component: PatientListComponent},
  {path: 'add-patient', component: AddUpdatePatientComponent},
  {path: 'update-patient', component: AddUpdatePatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
