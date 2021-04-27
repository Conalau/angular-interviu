import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-info/patient-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AddUpdatePatientComponent } from './add-update-patient/add-update-patient.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    AddUpdatePatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
