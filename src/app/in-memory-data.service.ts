import { InMemoryDbService } from 'angular-in-memory-web-api'; 
import {Injectable} from '@angular/core';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let employees=[
      {
        id: 1, 
        name: 'Walter', 
        location:'Tijuana', 
        email: 'walter@gmail.com',
        mobile:'6641232323'   
      },
      {
        id: 2, 
        name: 'Carla',
        location:'Mexicali', 
        email: 'carla@gmail.com', 
        mobile: '6644421223'  
      },
      { 
        id: 3, 
        name: 'Jose',
        location:'Tecate', 
        email: 'jose@gmail.com', 
        mobile: '6631233445'  
      }

    ];
    return {employees};
  }
}
