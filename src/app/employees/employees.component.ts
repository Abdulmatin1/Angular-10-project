import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 employee: Array<any>;
 totalEmployees: any;
 searchDetail: any = '';
 page: Number = 1;

  constructor(private service: DataService) {

    this.employee = new Array<any>();
   }

  ngOnInit(): void {
    this.loadEmployee();
  }


   loadEmployee() {
    this.service.getEmployees().subscribe(res => {
      this.employee = res.results;
      this.totalEmployees = this.employee.length;
    });
  }

}
