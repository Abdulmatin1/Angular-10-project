import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  employees = false;

  employeeAdress = "Kabul Afghanistan";

  constructor() {

    setTimeout(() => {
      this.employees = true;
    }, 2000);




  }

  ngOnInit(): void {
  }



  addEmployee(){
    return this.employeeAdress = "Harvard USA ";

  }
}
