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
}
