

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


     list: Employee[] = [

    {
      id: 12,
      firstName: 'kamal',
      lastName: 'jan',
      email:    'jan@gmail.com'
  },
  {
    id: 25,
    firstName: 'tawab',
    lastName: 'khan',
    email:    'khan@gmail.com'
},

   ];


  @Input() EmployeeList: Employee[];

 @Output() toparent  = new EventEmitter<Employee[]>();
  constructor() { }


  sendToParent(emp: Employee[]){
    this.toparent.emit(emp);
  }














  ngOnInit(): void {
  }

}
