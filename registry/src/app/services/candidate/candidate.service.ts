import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidate } from 'src/app/models/candidate.model';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  URL = "http://127.0.0.1:9998/candidate";
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<any>(this.URL,{ observe: 'response' });
  }

  findById(id: string){
    return this.http.get<any>(this.URL + "/" +  id, { observe: 'response' });
  }

  create(id_party:String, candidate:Candidate){
    let url = "/party/" + id_party;
    return this.http.post<any>(this.URL + url, candidate, { observe: 'response' });
  }

  update(id:String, id_party:String, candidate:Candidate){
    let url = "/" +  id + "/party/" + id_party;
    return this.http.put<any>(this.URL + url,candidate,{ observe: 'response' });
  }

  delete(id: string){
    return this.http.delete<any>(this.URL + "/" +  id,{ observe: 'response' });
  }
}