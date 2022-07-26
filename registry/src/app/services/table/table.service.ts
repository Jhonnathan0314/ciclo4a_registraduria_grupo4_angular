import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from 'src/app/models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  URL = "/table";
  constructor(private http: HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get<any>(this.URL);
  }

  findById(id: string): Observable<any>{
    return this.http.get<any>(this.URL + "/" + id);
  }

  create(table:Table): Observable<any>{
    return this.http.post<any>(this.URL ,table);
  }

  update(id:String, table:Table): Observable<any>{
    return this.http.put<any>(this.URL + "/" +  id,table);
  }

  delete(id: string): Observable<any>{
    return this.http.delete<any>(this.URL + "/" +  id);
  }
}
