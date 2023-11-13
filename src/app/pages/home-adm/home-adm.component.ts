// home-adm.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';  // Substitua pelo caminho real

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css']
})
export class HomeAdmComponent implements OnInit {
  produtos: any[] = [];  // Array para armazenar os produtos

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.userService.obterProdutos().subscribe(
      (response) => {
        this.produtos = response;  // Armazena a lista de produtos
      },
      (error) => {
        console.error('Erro ao obter produtos', error);
      }
    );
  }

  redirecionarCriarProduto() {
    this.router.navigate(['/create-product']);
  }
}
