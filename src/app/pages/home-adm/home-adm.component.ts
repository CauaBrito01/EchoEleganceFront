import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrl: './home-adm.component.css'
})
export class HomeAdmComponent {

  constructor(private router: Router) {}

  redirecionarCriarProduto() {
    this.router.navigate(['/create-product']);
  }

}
