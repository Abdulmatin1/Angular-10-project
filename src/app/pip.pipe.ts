import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'a'
})
export class PipPipe implements PipeTransform {
  transform(employees: any[], SearchValue: string): any[] {
    if (!employees || !SearchValue) {
      return employees;
    }
    return employees.filter(emp => {
      // tslint:disable-next-line: no-unused-expression
        emp.firstName.toLowerCase().includes(SearchValue.toLowerCase()) ||
        emp.lastName.toLowerCase().includes(SearchValue.toLowerCase());

    });
  }
}
