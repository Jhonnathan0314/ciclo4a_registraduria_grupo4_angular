import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Permission } from 'src/app/models/permission.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Permission[]> {
    let url = "/permission";
    return this.http.get<Permission[]>(url);
  }

  findById(id: string): Observable<Permission> {
    let url = "/permission/" + id;
    return this.http.get<Permission>(url);
  }

  create(permission: Permission): Observable<Permission> {
    let url = "/permission";
    return this.http.post<Permission>(url, permission);
  }

  update(id: string, permission: Permission): Observable<Permission> {
    let url = "/permission/" + id;
    return this.http.put<any>(url, permission);
  }

  delete(id: string) {
    let url = "/permission/" + id;
    return this.http.delete<Permission>(url);
  }
}
