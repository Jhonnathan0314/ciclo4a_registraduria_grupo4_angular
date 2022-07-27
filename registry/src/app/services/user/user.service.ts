import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = "/user";
  constructor(private http: HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get<any>(this.URL);
  }

  findById(id: string): Observable<any>{
    return this.http.get<any>(this.URL + "/" +  id);
  }

  create(id_role:String, user:User): Observable<any>{
    let url = "/role/" + id_role;
    return this.http.post<any>(this.URL + url, user);
  }

  update(id:String, id_role:String, user:User): Observable<any>{
    let url = "/" +  id + "/role/" + id_role;
    return this.http.put<any>(this.URL + url,user);
  }

  delete(id: string): Observable<any>{
    return this.http.delete<any>(this.URL + "/" +  id);
  }
}
