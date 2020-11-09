import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  // fire base url

  private fireBaseUrl = 'https://angular-crud-360c4.firebaseio.com/Posts.json';
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

 // post method
  createPost(title: string, content: string) {
    const postData: Posts = { title, content };

    return this.http.post(this.fireBaseUrl, postData).subscribe((data) => {

      console.log(data);
    },
     error =>{
       this.error.next(error.message);
     }
    );
  }

  // get method
  onFetchPosts() {
    return this.http.get<Posts>(this.fireBaseUrl).pipe(
      map((respondeData) => {
        const ArrayData: Posts[] = [];
        for (const key in respondeData) {
          if (respondeData.hasOwnProperty(key)) {
            ArrayData.push({ ...respondeData[key], id: key });
          }
        }
        return ArrayData;
      })
    );
  }



  // delete method
deletePost(){
  return this.http.delete(this.fireBaseUrl);
}

}
