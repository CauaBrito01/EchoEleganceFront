



// cadastro.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    nomeUsuario: '',
    emailUsuario: '',
    senhaUsuario: '',
    cpf: '',
    endereco: ''
  };
  confirmarSenha = ''; // Adicione uma variável para confirmar a senha

  constructor(private router: Router, private userService: UserService) {}

  redirecionarLogin() {
    this.router.navigate(['/login']);
  }

  criarUsuario(): void {
    // Verifique se a senha e a confirmação de senha coincidem
    if (this.usuario.senhaUsuario !== this.confirmarSenha) {
      console.error('As senhas não coincidem.');
      // Adicione aqui a lógica para lidar com a senha não coincidente, como exibir uma mensagem ao usuário.
      return;
    }

    // Continue com o restante do código para criar o usuário
    console.log('testeeeeeeeeeeeeeeeeeeeeeeeee');
    this.userService.criarUsuario(this.usuario).subscribe(
      response => {
        console.log('Resposta da API:', response);
        // Adicione aqui a lógica para redirecionar para a página desejada ou qualquer outra ação necessária.
      },
      error => {
        console.error('Erro ao criar usuário:', error);
        // Adicione aqui a lógica para lidar com erros, como exibir uma mensagem ao usuário.
      }
    );
  }
}