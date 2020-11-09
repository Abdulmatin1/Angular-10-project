import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  data: Array<any>[];
  totalusers: any;
  page: Number = 1;
  searchValue: string = '';
  constructor(private dataService: DataService) {
    // tslint:disable-next-line: new-parens
    this.data = new Array<any[]>();

  }

  ngOnInit(): void {

     this.loadEmployee();
  }


   loadEmployee() {
    this.dataService.getUsers().subscribe(res => {
      this.data = res.results;
      this.totalusers = this.data.length;
    });
  }



}
