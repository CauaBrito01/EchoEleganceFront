// adm-product-card.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

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

      this.userService.excluirProduto(idProduto).subscribe(
        (response) => {
          if (response.status === 204) {
            console.log('Produto excluído com sucesso', response);
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([this.router.url]);
          } else {
            console.error('Erro ao excluir produto - Resposta inesperada:', response);
          }
        },
        (error) => {
          console.error('Erro ao excluir produto', error);
        }
      );
    } else {
      console.error('Objeto de produto inválido:', this.data);
    }
  }
}
