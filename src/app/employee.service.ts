import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:8081/api/v1/employees';
  constructor(private httpclint: HttpClient) {}

// get All employees
  getEmployeeList(): Observable<Employee[]>{


    return this.httpclint.get<Employee[]>(`${this.baseURL}`);


  }

  // Add emplyee method
  // tslint:disable-next-line: ban-types
  createEmployee(employee: Employee): Observable<Object>{

    return this.httpclint.post(`${this.baseURL}`, employee);

  }

// get emplyee by id method
  getEmployeeById(id: number): Observable<Employee>{

    return this.httpclint.get<Employee>(`${this.baseURL}/${id}`);


  }

// update emplyee by id method
  updateEmployee(id: number, employee: Employee): Observable<Object>{

   return this.httpclint.put(`${this.baseURL}/${id}`, employee);


  }


// delet emplyee by id method
  deleteEmployee(id: number): Observable<object>{

    return this.httpclint.delete(`${this.baseURL}/${id}`);
  }
}
