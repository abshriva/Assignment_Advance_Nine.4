import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
//import { EmployeeType } from '../models/Employee-type';


@Injectable()
export class EmployeeService{

    emp:Employee[] =[];
   

      getEmployees(): Employee[]
      { 
      return this.emp;
      }
        
      createEmployee(newEmp: Employee)
      {
      this.emp.unshift(newEmp);
      
      }
        
}