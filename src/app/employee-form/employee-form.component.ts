
import { Employee } from '../models/Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { EmployeeDropDownService } from '../services/employee-drop-dow.service';
import { EmployeeType } from '../models/Employee-type';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  //providers:[EmployeeDropDownService]
 
})
export class EmployeeFormComponent implements OnInit {

  employee:Employee = new Employee();
  employeeType: EmployeeType[] = [];

  constructor(private employeeService: EmployeeService,private empDropDownService: EmployeeDropDownService) { }

  ngOnInit() {

    this.employee={
      id:null,
      name:'',
      age:null,
      title:''
    }
    this.employeeType = this.empDropDownService.getEmployeeType();
  }
  
  onSave(values)
  {
    this.employee={
      id:values.id,
      name:values.name,
      age:values.age,
      title:values.employeeType
    };
    
    
    // let newEmp= new Employee();
    // newEmp.id = this.employee.id;
    // newEmp.name = this.employee.name;
    // newEmp.age = this.employee.age;
    // newEmp.title= this.employee.title;

    
    this.employeeService.createEmployee(this.employee);
    
    //this.employee = new Employee();
    

  }
    /**Reset a form */
    // resetForm(f) {
    //   f.reset();
    // };
   

}
