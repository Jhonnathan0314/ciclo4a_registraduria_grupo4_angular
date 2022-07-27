import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  user_id: string = localStorage.getItem("user_id")?.toString()!;
  token: string = localStorage.getItem("token")?.toString()!;

  constructor(private http: HttpClient, private router: Router) {
    this.checkActualSession();
  }

  login(user_data: User): Observable<User> {
    let url = environment.url_gateway + "/login";
    let body = user_data;
    return this.http.post<User>(url, body);
  }

  logout(): void {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    this.setUser("");
    this.setToken("");
  }

  /**
  * Guarda los datos tales como el identificador
  * y token del usuario en una base de datos
  * interna del navegador llamada local storage
  * @param datosSesion información del usuario
  * @returns un booleano que indica si la información
  * fue almacenada correctamente
  */
  saveSessionData(session_data: any): void {
    localStorage.setItem('user_id', session_data.user_id);
    localStorage.setItem('token', session_data.token);
    this.setUser(session_data.user_id);
    this.setToken(session_data.token);
  }

  /**
  * Permite verificar si actualmente en el local storage
  * existe información de un usuario previamente logueado
  */
  checkActualSession(): void {
    let actualUser = this.getUser();
    let actualToken = this.getToken();
    if (actualUser != undefined && actualToken != undefined) {
      this.setUser(actualUser);
      this.setToken(actualToken);
      // this.router.navigate(['dashboard']);
    }
  }

  /**
  * Verifica si hay una sesion activa
  * @returns
  */
  sessionExist(): boolean {
    let actualUser = this.getUser();
    let actualToken = this.getToken();
    return (actualUser != "" && actualToken != "") ? true : false;
  }

  setUser(user_id: string): void {
    this.user_id = user_id;
  }

  getUser(): string {
    return this.user_id;
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

}
