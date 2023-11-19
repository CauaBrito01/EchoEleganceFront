import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = []; // Array para armazenar os produtos

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.carregarProdutos(); // Carrega os produtos ao inicializar o componente
  }

  carregarProdutos() {
    this.userService.obterProdutos().subscribe(
      (data) => {
        this.products = data; // Atualiza a lista de produtos com os dados recebidos
      },
      (error) => {
        console.error('Erro ao obter produtos:', error);
      }
    );
  }

  redirecionarParaPdp(product: any) {
    this.router.navigate(['/pdp'], { state: { data: product } });
  }

  redirecionarParaFilterProducts(categoria: string) {
    this.router.navigate(['/filter-products'], { state: { categoria } });
  }
}