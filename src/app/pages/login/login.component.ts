// login.component.ts
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { LoginRequest } from "../../models/login-request.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailUsuario: string = '';
  senhaUsuario: string = '';

  constructor(private router: Router, private userService: UserService) {}

  redirecionarParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  redirecionarParaHome() {
    const loginData: LoginRequest = {
        emailUsuario: this.emailUsuario,
        senhaUsuario: this.senhaUsuario
    };

    this.userService.autenticarUsuario(loginData).subscribe(
        (redirectToPage: string) => {
            console.log('Rota de redirecionamento:', redirectToPage);

            if (redirectToPage) {
                // Redirecione para a rota retornada pelo servidor após a autenticação bem-sucedida
                this.router.navigate([redirectToPage]);
            } else {
                console.log('Autenticação falhou');
                // Lógica para lidar com autenticação falhada
            }
        },
        error => {
            console.error('Erro de autenticação:', error);
            // Lógica para lidar com erros de comunicação com o servidor
        }
    );
}

}




