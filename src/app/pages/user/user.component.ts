import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name: string = '';
  email: string = '';
  endereco: string = '';
  cpf: string = '';
  senha: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obter dados da rota
    const productData = this.route.snapshot.data;

    if (productData) {
      this.name = productData['name'];
      this.email = productData['email'];
      this.endereco = productData['endereco'];
      this.cpf = productData['cpf'];
      this.senha = productData['senha'];
    }
  }
}
