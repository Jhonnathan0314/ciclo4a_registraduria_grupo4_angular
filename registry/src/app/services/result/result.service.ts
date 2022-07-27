import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from 'src/app/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  URL = "/result";
  constructor(private http: HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get<any>(this.URL);
  }

  findById(id: string): Observable<any>{
    return this.http.get<any>(this.URL + "/" +  id);
  }

  create(id_table:String, id_party:String, result:Result): Observable<any>{
    let url = "/table/" + id_table + "/party/" + id_party;
    return this.http.post<any>(this.URL + url, result);
  }

  update(id:String, id_table:String, id_party:String, result:Result): Observable<any>{
    let url = "/" +  id + "/table/" + id_table + "/party/" + id_party;
    return this.http.put<any>(this.URL + url,result);
  }

  delete(id: string): Observable<any>{
    return this.http.delete<any>(this.URL + "/" +  id);
  }
}
