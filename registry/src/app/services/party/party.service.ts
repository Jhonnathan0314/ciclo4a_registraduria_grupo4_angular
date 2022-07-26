import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Party } from 'src/app/models/party.model';
@Injectable({
  providedIn: 'root'
})
export class PartyService {

  URL = "/party";
  constructor(private http: HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get<any>(this.URL);
  }

  findById(id: string): Observable<any>{
    return this.http.get<any>(this.URL + "/" + id);
  }

  create(party:Party): Observable<any>{
    return this.http.post<any>(this.URL ,party);
  }

  update(id:String, party:Party): Observable<any>{
    return this.http.put<any>(this.URL + "/" +  id,party);
  }

  delete(id: string): Observable<any>{
    return this.http.delete<any>(this.URL + "/" +  id);
  }
}
