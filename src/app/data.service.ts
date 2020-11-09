import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpService: HttpClient) { }

  getUsers(): Observable<any>{
const  baseUrl = 'https://randomuser.me/api/?results=100';
return this.httpService.get<any>(baseUrl);

}

getEmployees(): Observable<any>{
  const _jsonURL = 'assets/jsons/Employees.json';
  return this.httpService.get<any>(_jsonURL);
}


}
