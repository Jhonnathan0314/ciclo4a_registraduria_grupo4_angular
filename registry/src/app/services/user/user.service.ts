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

  findAll(): Observable<any[]>{
    return this.http.get<User[]>(this.URL);
  }

  findById(id: string): Observable<User>{
    return this.http.get<User>(this.URL + "/" +  id);
  }

  create(user:User): Observable<User>{
    return this.http.post<User>(this.URL, user);
  }

  update(id:String, user:User): Observable<User>{
    let url = "/" +  id;
    return this.http.put<User>(this.URL + url,user);
  }

  addRole(id:String, id_role:String): Observable<User>{
    let url = "/" +  id + "/role/" + id_role;
    return this.http.put<User>(this.URL + url, {});
  }
  
  defaultRole(id_user:String): Observable<any> {
    let url = "/" +  id_user + "/role/62d9cbf7e7be7361b039f238";
    return this.http.put<User>(this.URL + url, {});
  }

  delete(id: string): Observable<User>{
    return this.http.delete<User>(this.URL + "/" +  id);
  }
}
