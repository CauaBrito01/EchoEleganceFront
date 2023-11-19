// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { LoginRequest } from '../models/login-request.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private createUser = 'http://localhost:8090/usuario';
  private createProduto = 'http://localhost:8090/produtos';
  private getProdutos = 'http://localhost:8090/produtos';
  private deleteProduto = 'http://localhost:8090/produtos';
  private loginUser = 'http://localhost:8090/usuario/login';

  constructor(private http: HttpClient) {}

  criarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.createUser, usuario);
  }

  criarProduto(product: any): Observable<any> {
    return this.http.post(this.createProduto, product);
  }

  obterProdutos(): Observable<any> {
    return this.http.get(this.getProdutos);
  }

  obterProdutoPorId(productId: number): Observable<any> {
    return this.http.get(`${this.getProdutos}/${productId}`);
  }

  excluirProduto(productId: number): Observable<any> {
    return this.http.delete(`${this.deleteProduto}/${productId}`);
  }

  editarProduto(productId: number, editedProductData: any): Observable<any> {
    const editUrl = `${this.getProdutos}/${productId}`;
    return this.http.put(editUrl, editedProductData);
  }

  autenticarUsuario(loginData: LoginRequest): Observable<any> {
    return this.http.post(this.loginUser, loginData, { observe: 'response' })
        .pipe(
            map(response => response.body), // Map para obter o corpo da resposta
            catchError(error => {
                // Se ocorrer um erro, tratamos a resposta como texto
                if (error instanceof HttpErrorResponse) {
                    return new Observable<string>((observer) => {
                        observer.next(error.error.text || ''); // Retornar texto vazio em caso de erro
                        observer.complete();
                    });
                }
                throw error; // Se não for uma instância de HttpErrorResponse, rejeitar o erro normalmente
            })
        );


  }
}
      
