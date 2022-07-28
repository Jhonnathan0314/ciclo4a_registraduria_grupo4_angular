import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Percentage } from 'src/app/models/percentage.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  URL = "/report";
  constructor(private http: HttpClient) { }

  findReport(): Observable<any> {
    return this.http.put<any>(this.URL, {});
  }

  findPartiesReport(): Observable<any> {
    this.URL = this.URL + "/parties"
    return this.http.get<any>(this.URL);
  }

  findPercentages(): Observable<Percentage[]>{
    this.URL = this.URL + "/percentage"
    return this.http.get<Percentage[]>(this.URL);
  }
}
