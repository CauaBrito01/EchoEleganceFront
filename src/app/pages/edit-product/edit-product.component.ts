import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  title: string = '';
  description: string = '';
  marca: string = '';
  nota: string = '';
  origem: string = '';
  price: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Obter dados da rota
    const productData = this.route.snapshot.data;

    if (productData) {
      this.title = productData['title'];
      this.description = productData['description'];
      this.marca = productData['marca'];
      this.nota = productData['nota'];
      this.origem = productData['origem'];
      this.price = productData['price'];
    }
  }

  
  editar() {
    this.router.navigate(['/adm-home']);
  }
}
