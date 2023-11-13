import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adm-product-card',
  templateUrl: './adm-product-card.component.html',
  styleUrl: './adm-product-card.component.css'
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

  constructor(private router: Router) {}

  redirecionarEditPage() {
    this.router.navigate(['/edit-product']);
  }

}
