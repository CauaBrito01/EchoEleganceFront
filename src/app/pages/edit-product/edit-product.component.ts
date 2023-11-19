import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId!: number;

  Produto = {
    preco: '',
    tituloProduto: '',
    dscProduto: '',
    marca: '',
    indAtivo: '',
    qtdProduto: '',
    avgNota: '',
    imgProduto: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id')!;

    this.userService.obterProdutoPorId(this.productId).subscribe(
      (product) => {
        if (product) {
          this.Produto = { ...product }; // Atualize todos os campos do produto
        } else {
          console.error('Produto não encontrado');
        }
      },
      (error) => {
        console.error('Erro ao obter detalhes do produto', error);
      }
    );
  }

  editarProduto() {
    Swal.fire({
      title: "Voce quer salvar as alterações?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Salvar",
      denyButtonText: `Não salvar`,
      cancelButtonText: "Cancelar"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Se o usuário clicar em 'Salvar', chame o serviço para editar o produto
        this.userService.editarProduto(this.productId, this.Produto).subscribe(
          (response) => {
            console.log('Produto editado com sucesso', response);
            this.showAlertCerto('Certo', 'Editado com sucesso'); // Chama a função showAlert() quando ocorre uma autenticação falhada
            setTimeout(() => {
              this.router.navigate(['/adm-home']);
            }, 2000);
          },
          (error) => {
            console.error('Erro ao editar produto', error);
          }
        );
      } else if (result.isDenied) {
        // Se o usuário clicar em 'Não salvar', vá para a rota '/adm-home'
        this.showAlertErro('Cancelado', 'Produto não editado'); // Chama a função showAlert() quando ocorre uma autenticação falhada
            setTimeout(() => {
              this.router.navigate(['/adm-home']);
            }, 2000);
        this.router.navigate(['/adm-home']);
      }
    });
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
