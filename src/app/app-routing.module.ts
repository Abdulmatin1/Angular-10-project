import { BasicComponent } from './basic/basic.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FireBaseCrudeComponent } from './fire-base-crude/fire-base-crude.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { UsersComponent } from './users/users.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


const routes: Routes = [

  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'employeeDetails', component: EmployeesComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'fireBase-crud', component: FireBaseCrudeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'basic', component: BasicComponent },

  {path: '', redirectTo: 'employees', pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
