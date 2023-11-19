import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {
  tituloProduto: string = '';
  dscProduto: string = '';
  preco: string = '';
  quantidade: number = 1;
  userRating: number = 0;
  imgProduto: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obter dados da rota
    const productData = history.state.data;

    if (productData) {
      this.tituloProduto = productData.tituloProduto;
      this.dscProduto = productData.dscProduto;
      this.preco = productData.preco;
      this.imgProduto = productData.imgProduto;
    }
    console.log(productData);
  }

  comprarProduto(): void {
    // Criar um objeto com os detalhes do produto
    const produto = {
      title: this.tituloProduto,
      description: this.dscProduto,
      price: this.preco,
      quantidade: this.quantidade,
      userRating: this.userRating
    };

    // Obter o array de produtos do localStorage
    const produtosNoCarrinhoString = localStorage.getItem('produtosNoCarrinho');

    // Verificar se a chave existe no localStorage
    if (produtosNoCarrinhoString) {
      // Se existir, fazer o parse do JSON
      const produtosNoCarrinho = JSON.parse(produtosNoCarrinhoString);

      // Adicionar o novo produto ao array
      produtosNoCarrinho.push(produto);

      // Armazenar o array atualizado de produtos de volta no localStorage
      localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtosNoCarrinho));
    } else {
      // Se a chave não existir, criar um novo array com o produto e armazenar no localStorage
      localStorage.setItem('produtosNoCarrinho', JSON.stringify([produto]));
    }

    // Você pode adicionar uma mensagem ou lógica adicional aqui se desejar
    console.log('Produto adicionado ao carrinho:', produto);
  }

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  onRatingChange(rating: number): void {
    this.userRating = rating;
  }
}