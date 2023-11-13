import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  redirecionarParaPdp() {
    const productData = {
      title: "Camiseta Oakley Mark II SS Masculina",
      description: "Descrição do produto...",
      price: "R$ 199,90"
    };
  
    this.router.navigate(['/pdp'], { state: { data: productData } });
  }
  

}
