import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  employee: Employee = new Employee();
  constructor( private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }


  onSubmit(f: NgForm)  {
    console.log(this.employee);
    this.addEmployee();
    f.reset();

  }


  addEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
     this.gotoEmployeeList();
    },
    error => console.error(error));

  }

  gotoEmployeeList(){

    this.router.navigate(['/create-employee']);
  }

}
