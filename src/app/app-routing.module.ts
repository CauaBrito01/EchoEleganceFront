import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { PdpComponent } from './pages/pdp/pdp.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'pdp',
    component: PdpComponent,
    data: 
      { 
        title: 'Camiseta Oakley Mark II SS Masculina', 
        description: 'A Camiseta Oakley Mark II SS Masculina é uma peça de vestuário esportiva que combina estilo e funcionalidade. Desenvolvida pela renomada marca Oakley, conhecida por sua qualidade e inovação, esta camiseta apresenta um design moderno e atlético, perfeito para quem busca conforto durante atividades físicas ou para compor um visual casual e esportivo no dia a dia.', 
        price: 'R$ 199,90' 
      }
  },
  // Outras rotas
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecionar para 'home' por padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
