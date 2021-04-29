import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-update-patient',
  templateUrl: './add-update-patient.component.html',
  styleUrls: ['./add-update-patient.component.css'],
  providers:[DataService]
})
export class AddUpdatePatientComponent implements OnInit {

  model: any = {}

  savePatient(patientForm : NgForm) {
    this.data.addPatient(patientForm.value);
  }
  constructor(private data : DataService) { }

  ngOnInit() {
  }

}



