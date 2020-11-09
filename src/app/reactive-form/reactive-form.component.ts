import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm:  FormGroup;
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({

      username: new FormControl(''),
      password: new FormControl(''),
      confirmpassword: new FormControl(''),
    });

  }


  onSubmit(){
   console.log(this.userForm);

  }

}
