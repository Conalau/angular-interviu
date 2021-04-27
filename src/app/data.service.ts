import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  patients: Object[];

  constructor() {
    if (localStorage.getItem('patients') === null) {
      localStorage.setItem('patients',JSON.stringify([
        {firstName : 'Georgescu', lastName : 'Andrei', birthDate:'3/07/2000', gender: 'M', CNP: 1356234677975, phoneNumber : '0740678549'},
        {firstName : 'Popescu', lastName : 'Georgiana', birthDate:'14/02/1994', gender: 'F', CNP: 4321264647935, phoneNumber : '0756898023'},
        {firstName : 'Andrei', lastName : 'Ionut', birthDate:'15/10/1970', gender: 'M', CNP: 1152537697475, phoneNumber : '0768752450'},
        {firstName : 'Mihaiu', lastName : 'Andreea', birthDate:'8/09/2002', gender: 'F', CNP: 1358205616975, phoneNumber : '0739492786'}
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
  }


