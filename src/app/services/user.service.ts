// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private createUser = 'http://localhost:8090/usuario';
  private createProduto = 'http://localhost:8090/produtos';
  private getProdutos = 'http://localhost:8090/produtos';  // Adicione a URL para obter produtos


  constructor(private http: HttpClient) { }

  criarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.createUser, usuario);
  }

  criarProduto(product: any): Observable<any> {
    return this.http.post(this.createProduto, product);
  }

  obterProdutos(): Observable<any> {
    return this.http.get(this.getProdutos);
  }
  
}