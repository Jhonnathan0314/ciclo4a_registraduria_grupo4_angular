import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  URL = "/report/percentages";
  constructor(private http: HttpClient) { }

  findPercentages(): Observable<any>{
    return this.http.get<any>(this.URL);
  }
}
