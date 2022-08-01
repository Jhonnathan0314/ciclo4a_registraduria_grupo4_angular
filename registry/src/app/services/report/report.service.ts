import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Percentage } from 'src/app/models/percentage.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  findReport(): Observable<any> {
    let URL = "/report";
    return this.http.put<any>(URL, {});
  }

  findPartiesReport(): Observable<any> {
    let URL = "/report/parties"
    return this.http.get<any>(URL);
  }

  findPercentages(): Observable<Percentage[]>{
    let URL = "/report/percentage"
    return this.http.get<Percentage[]>(URL);
  }
}
