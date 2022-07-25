import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Party } from 'src/app/models/party.model';
@Injectable({
  providedIn: 'root'
})
export class PartyService {

  URL = "http://127.0.0.1:9998/party";
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<any>(this.URL,{ observe: 'response' });
  }

  findById(id: string){
    return this.http.get<any>(this.URL + "/" + id, { observe: 'response' });
  }

  create(id_party:String, party:Party){
    return this.http.post<any>(this.URL ,party, { observe: 'response' });
  }

  update(id:String, party:Party){
    return this.http.put<any>(this.URL + "/" +  id,party,{ observe: 'response' });
  }

  delete(id: string){
    return this.http.delete<any>(this.URL + "/" +  id,{ observe: 'response' });
  }
}
