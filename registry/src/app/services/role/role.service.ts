import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/role.model';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  URL = "/role";
  constructor(private http: HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get<any>(this.URL);
  }

  findById(id: string): Observable<any>{
    return this.http.get<any>(this.URL + "/" +  id);
  }

  create(role:Role): Observable<any>{
    return this.http.post<any>(this.URL ,role);
  }

  update(id:String, role:Role): Observable<any>{
    return this.http.put<any>(this.URL + "/" +  id,role);
  }


  delete(id: string): Observable<any>{
    console.log(id);
    return this.http.delete<any>(this.URL + "/" +  id);
  }
}
