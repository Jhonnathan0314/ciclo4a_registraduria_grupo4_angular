import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/models/candidate.model';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  URL = "/candidate";
  constructor(private http: HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get<any>(this.URL);
  }

  findById(id: string): Observable<any>{
    return this.http.get<any>(this.URL + "/" +  id);
  }

  create(id_party:String, candidate:Candidate): Observable<any>{
    let url = "/party/" + id_party;
    return this.http.post<any>(this.URL + url, candidate);
  }

  update(id:String, id_party:String, candidate:Candidate): Observable<any>{
    let url = "/" +  id + "/party/" + id_party;
    return this.http.put<any>(this.URL + url,candidate);
  }

  delete(id: string): Observable<any>{
    return this.http.delete<any>(this.URL + "/" +  id);
  }
}