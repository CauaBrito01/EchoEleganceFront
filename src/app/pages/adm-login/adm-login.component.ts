import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-login',
  templateUrl: './adm-login.component.html',
  styleUrl: './adm-login.component.css'
})
export class AdmLoginComponent {
  constructor(private router: Router) {}

  redirecionarParaCadastro() {
    this.router.navigate(['/adm-cadastro']);
  }

  redirecionarParaHome() {
    this.router.navigate(['/adm-home']);
  }
}
