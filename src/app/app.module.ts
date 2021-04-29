import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AddUpdatePatientComponent } from './add-update-patient/add-update-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    AddUpdatePatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
