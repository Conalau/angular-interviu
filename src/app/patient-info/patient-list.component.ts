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
  constructor(private data: DataService) { }

  ngOnInit() {
    console.log(this.getDataReceived());
    this.getDataReceived();
    }
  }

