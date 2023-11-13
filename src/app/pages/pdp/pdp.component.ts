// pdp.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {
  title: string = '';
  description: string = '';
  price: string = '';
  quantidade: number = 1;
  userRating: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obter dados da rota
    const productData = this.route.snapshot.data;

    if (productData) {
      this.title = productData['title'];
      this.description = productData['description'];
      this.price = productData['price'];
    }
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
