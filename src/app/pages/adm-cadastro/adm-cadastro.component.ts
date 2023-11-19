import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-adm-cadastro',
  templateUrl: './adm-cadastro.component.html',
  styleUrls: ['./adm-cadastro.component.css']
})
export class AdmCadastroComponent {
   Produto = {
    preco: '',
    tituloProduto: '',
    descProduto: '',
    marca: '',
    indAtivo: '',
    IdAnunciante: '',
    qtdProduto: '',
    avgNota: '',
    imgProduto: '',
  }

  constructor(private router: Router, private userService: UserService) {}

  redirecionarLogin() {
    this.router.navigate(['/adm-login']);
  }

  criarUsuario(): void {

    this.userService.criarUsuario(this.Produto).subscribe(
      response => {
        console.log('Resposta da API:', response);
        // Adicione aqui a lógica para redirecionar para a página desejada ou qualquer outra ação necessária.
      },
      error => {
        console.error('Erro ao criar produto:', error);
        // Adicione aqui a lógica para lidar com erros, como exibir uma mensagem ao usuário.
      }
    );
  }
}
