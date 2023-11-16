import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { LoginRequest } from "../../models/login-request.model";
import Swal from 'sweetalert2';

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
          this.showAlertErro('Erro', 'Falha na autenticação'); // Chama a função showAlert() quando ocorre uma autenticação falhada
          // Lógica para lidar com autenticação falhada
        }
      },
      error => {
        console.error('Erro de autenticação:', error);
        this.showAlertErro('Erro', 'Erro de comunicação com o servidor'); // Chama a função showAlert() quando ocorre um erro
        // Lógica para lidar com erros de comunicação com o servidor
      }
    );
  }

  showAlertErro(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
  showAlertCerto(title: string, message: string) {
    Swal.fire({
        title: "Good job!",
        text: "Logado com sucesso!",
        icon: "success"
    });
    }
}
