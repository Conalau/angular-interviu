import { Injectable } from '@angular/core';
// import { Patient } from '../app/patient.model'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  patients: any[];

  constructor() {
    if (localStorage.getItem('patients') === null) {
      localStorage.setItem('patients',JSON.stringify([
        {firstName : 'Georgescu', lastName : 'Andrei', birthDate:'2000-07-03', gender: 'M', CNP: 1356234677975, phoneNumber : '0740678549'},
        {firstName : 'Popescu', lastName : 'Georgiana', birthDate:'1994-02-14', gender: 'F', CNP: 4321264647935, phoneNumber : '0756898023'},
        {firstName : 'Andrei', lastName : 'Ionut', birthDate:'1970-10-15', gender: 'M', CNP: 1152537697475, phoneNumber : '0768752450'},
        {firstName : 'Mihaiu', lastName : 'Andreea', birthDate:'2002-08-08', gender: 'F', CNP: 1358205616975, phoneNumber : '0739492786'}
    ]));
  } 
    this.patients=JSON.parse(localStorage.getItem('patients'));
}
    
  
    
    getPatients(): object[]{
      return this.patients;
    }
    
    addPatient(patientData : object) {
      this.patients.push(patientData);
      localStorage.setItem('patients',JSON.stringify(this.patients))
    }

    deletePatient(CNP : number) {
      this.getPatients()
      const patientIndex = this.patients.findIndex(p => p.CNP === CNP)
      if(patientIndex > -1) {
        this.patients.splice(patientIndex, 1)
        this.savePatientList();
      }
    }
    savePatientList() {
      localStorage.setItem('patients', JSON.stringify(this.patients));
      this.patients = JSON.parse(localStorage.getItem('patients'));
      console.log('Saved', this.patients);
    }
  }


