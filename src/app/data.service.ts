import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
    patients: object[]= [
      {fristName : 'Georgescu', secondName : 'Andrei', birthDate:'3/07/2000', Sex: 'M', CNP: '1356234677975', phoneNumber : '0740678549'},
      {fristName : 'Popescu', secondName : 'Georgiana', birthDate:'14/02/1994', Sex: 'F', CNP: '4321264647935', phoneNumber : '0756898023'},
      {fristName : 'Andrei', secondName : 'Ionut', birthDate:'15/10/1970', Sex: 'M', CNP: '1152537697475', phoneNumber : '0768752450'},
      {fristName : 'Mihaiu', secondName : 'Andreea', birthDate:'8/09/2002', Sex: 'F', CNP: '1358205616975', phoneNumber : '0739492786'}
    ]

    getPatients(): object[]{
      return this.patients;
    }
  
  }


