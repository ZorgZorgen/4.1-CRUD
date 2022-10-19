import { Component } from '@angular/core';

@Component({
  selector: 'employee-home',
  template: '<h2>Bienvenidos al Sistema de Administracion de Empleados</h2>',
  styles: [
    `
      h2{
        text-align:center
      }`,
  ],
})
export class EmployeeHomeComponent {}
