import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id: any;
  constructor(private employeeService: EmployeeService , private activeRout: ActivatedRoute, private router: Router) { }





  ngOnInit(): void {
this.id = this.activeRout.snapshot.params['id'];
this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));


    }



    onSubmit(){

      this.employeeService.updateEmployee(this.id, this.employee).subscribe(data =>{
        this.gotoEmployeeList();
      },
      error => console.log(error));
    }


  gotoEmployeeList(){

    this.router.navigate(['/employees']);
  }
  }

