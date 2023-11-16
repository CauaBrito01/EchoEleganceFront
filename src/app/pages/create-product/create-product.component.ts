// cadastro.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  Produto = {
    preco: '',
    tituloProduto: '',
    dscProduto: '',
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

  criarProduto(): void {

    this.userService.criarProduto(this.Produto).subscribe(
      response => {
        console.log('Resposta da API:', response);
        // Adicione aqui a lógica para redirecionar para a página desejada ou qualquer outra ação necessária.
        this.showAlertCerto('certo', 'comunicado ao servidor'); // Chama a função showAlert() quando ocorre um erro
        setTimeout(() => {
          this.router.navigate(['/adm-home']);
        }, 2000);

      },
      error => {
        console.error('Erro ao criar produto:', error);
        // Adicione aqui a lógica para lidar com erros, como exibir uma mensagem ao usuário.
      }
    );
  }
  showAlertCerto(title: string, message: string) {
    Swal.fire({
        title: "Good job!",
        text: "Usuario criado com sucesso!",
        icon: "success"
    });
    }
}
