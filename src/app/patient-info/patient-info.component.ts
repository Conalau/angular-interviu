import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css'],
  providers:[DataService]
})
export class PatientInfoComponent implements OnInit {

  dataReceived: object[] = [];

  getDataReceived(){
    return this.dataReceived = this.data.getPatients()
  }
  constructor(private data: DataService) { }

  ngOnInit() {
    this.getDataReceived();
    }
  }

