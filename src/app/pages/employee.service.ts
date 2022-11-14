import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployee(inquiry?: any, sort?: any, row?: any): Observable<any> {
    if (inquiry == '' || inquiry == null) {
      
    }

    const url = `http://localhost:3004/employee?q=${inquiry}&_sort=${sort}&_order=asc&row=${row}`;
    return this.http.get(url);
  }

  getDetailEmployee(id: any): Observable<any> {
    const url = `http://localhost:3004/employee/${id}`;
    return this.http.get(url);
  }

  addEmployee(body: any): Observable<any> {
    const url = 'http://localhost:3004/employee';
    return this.http.post(url, body);
  }
}
