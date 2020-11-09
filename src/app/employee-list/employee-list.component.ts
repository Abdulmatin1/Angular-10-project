import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  myEmployees: Employee[];
  searchText: string = '';

  getFromParent(emp: Employee[]){
  this.myEmployees = emp;
}





  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    });
  }

  // this method updates  employee list in database
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  // this method deletes all employee list from database
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployees();
    });
  }

  // this method show employee details all employee list from database
  vieweEmployeeDetail(id: number) {
    this.router.navigate(['employee-details', id]);
  }
}
