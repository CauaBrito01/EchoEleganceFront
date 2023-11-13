import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-cadastro',
  templateUrl: './adm-cadastro.component.html',
  styleUrl: './adm-cadastro.component.css'
})
export class AdmCadastroComponent {
  constructor(private router: Router) {}

  redirecionarLogin() {
    this.router.navigate(['/adm-login']);
  }
}
