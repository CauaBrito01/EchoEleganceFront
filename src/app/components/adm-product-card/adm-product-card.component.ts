import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adm-product-card',
  templateUrl: './adm-product-card.component.html',
  styleUrls: ['./adm-product-card.component.css']
})
export class AdmProductCardComponent {
  @Input() data: any;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() marca: string = '';
  @Input() nota: string = '';
  @Input() origem: string = '';
  @Input() imgProduto: string = '';
  @Input() qtdProduto: string = '';

  constructor(private router: Router, private userService: UserService) {}

  redirecionarEditPage() {
    this.router.navigate(['/edit-product', this.data.idProduto]);
  }

  excluirProduto() {
    if (this.data && this.data.idProduto) {
      const idProduto = this.data.idProduto;

      Swal.fire({
        title: "Tem certeza?",
        text: "Não será possível reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, deletar!",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          this.userService.excluirProduto(idProduto).subscribe(
            (response) => {
              if (response.status === 204) {
                console.log('Produto excluído com sucesso', response);
                Swal.fire({
                  title: "Deletado!",
                  text: "Produto deletado.",
                  icon: "success"
                });

                // Recarregue a página após a exclusão do produto
                location.reload();
              } else {
                console.error('Erro ao excluir produto - Resposta inesperada:', response);
              }
            },
            (error) => {
              console.error('Erro ao excluir produto', error);

              // Adicione este log para exibir detalhes do erro
              console.error('Detalhes do erro:', error);
            }
          );
        }
      });
    } else {
      console.error('Objeto de produto inválido:', this.data);
    }
  }
}
