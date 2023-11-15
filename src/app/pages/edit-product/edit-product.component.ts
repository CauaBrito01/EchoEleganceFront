// edit-product.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

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
    this.userService.editarProduto(this.productId, this.Produto).subscribe(
      (response) => {
        console.log('Produto editado com sucesso', response);
        this.router.navigate(['/adm-home']);
      },
      (error) => {
        console.error('Erro ao editar produto', error);
      }
    );
  }
}
