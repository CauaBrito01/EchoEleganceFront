import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit {
  @Input() categoria: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const state = this.route.snapshot.paramMap.get('categoria');
    if (state) {
      this.categoria = state || '';
      alert(this.categoria);
    }
  }

  redirecionarParaPdp() {
    const productData = {
      title: "Camiseta Oakley Mark II SS Masculina",
      description: "Descrição do produto...",
      price: "R$ 199,90"
    };
  
    this.router.navigate(['/pdp'], { state: { data: productData } });
  }
}
