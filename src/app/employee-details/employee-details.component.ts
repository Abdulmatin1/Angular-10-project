          import { EmployeeService } from './../employee.service';
          import { ActivatedRoute } from '@angular/router';
          import { Component, OnInit } from '@angular/core';
          import { Employee } from '../employee';

          @Component({
            selector: 'app-employee-details',
            templateUrl: './employee-details.component.html',
            styleUrls: ['./employee-details.component.css']
          })
          export class EmployeeDetailsComponent implements OnInit {

          id: number;
          employee: Employee;

            constructor(private rout: ActivatedRoute, private employeeService: EmployeeService) { }

            ngOnInit(): void {

              this.id = this.rout.snapshot.params['id']

              this.employee = new Employee();
              this.employeeService.getEmployeeById(this.id).subscribe(data => {
                this.employee = data;
              })

            }

          }
