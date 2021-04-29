import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers:[DataService]
})
export class PatientListComponent implements OnInit {

  dataReceived: object[] = [];

  getDataReceived(){
    return this.dataReceived = this.data.getPatients()
  }

  remove(CNP : number) {
    if(confirm("Are you sure you want to delete this patient")) {
      this.data.deletePatient(CNP);
    }
  }
  constructor(private data: DataService) { }

  ngOnInit() {
    console.log(this.getDataReceived());
    this.getDataReceived();
    }
  }

