import { FirebaseService } from './firebase.service';
import { NgForm, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Posts } from './post.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-fire-base-crude',
  templateUrl: './fire-base-crude.component.html',
  styleUrls: ['./fire-base-crude.component.css'],
})
export class FireBaseCrudeComponent implements OnInit {
  isFetching = false;
  error = null;
 private  erroSub: Subscription;
 loadedPosts: Posts[] = [];

  constructor( private firebaseService: FirebaseService ) {}



  ngOnInit(): void {
    this.isFetching = true;
  this.erroSub = this.firebaseService.error.subscribe(errorMessage =>{
     this.error = errorMessage;
  })
  }

 // post method
  onCreatePost(postData: Posts) {
    this.firebaseService.createPost(postData.title, postData.content);
    this.isFetching = false;

  }
// get method
onFetchPosts() {
  // Send Http request
  this.isFetching = true;
  this.firebaseService.onFetchPosts().subscribe(
    posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    },
    error => {
      this.error = error.message;
      console.log(error);
    }
  );
}
// delete method
  onClearPosts() {
    this.firebaseService.deletePost().subscribe(() => {
      this.loadedPosts = [];

    });
  }

  ngOnDestroy(){
    this.erroSub.unsubscribe();
  }


  onGetError(){
    this.error = null;
  }








  //class end braket
}
