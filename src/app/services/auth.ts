import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private api = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  login(nome: string, senha: string): Observable<any> {
    return this.http.post(`${this.api}/login`, {
      nome,
      senha
    });
  }

}