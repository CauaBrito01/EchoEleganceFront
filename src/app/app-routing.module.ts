// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { PdpComponent } from './pages/pdp/pdp.component';
import { UserComponent } from './pages/user/user.component';
import { AdmLoginComponent } from './pages/adm-login/adm-login.component';
import { AdmCadastroComponent } from './pages/adm-cadastro/adm-cadastro.component';
import { HomeAdmComponent } from './pages/home-adm/home-adm.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { FilterProductsComponent } from './pages/filter-products/filter-products.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'adm-login', component: AdmLoginComponent },
  { path: 'adm-cadastro', component: AdmCadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },

  {
    path: 'pdp',
    component: PdpComponent,
    data: {
      title: 'Camiseta Oakley Mark II SS Masculina',
      description: 'A Camiseta Oakley Mark II SS Masculina é uma peça de vestuário esportiva que combina estilo e funcionalidade. Desenvolvida pela renomada marca Oakley, conhecida por sua qualidade e inovação, esta camiseta apresenta um design moderno e atlético, perfeito para quem busca conforto durante atividades físicas ou para compor um visual casual e esportivo no dia a dia.',
      price: 'R$ 199,90'
    }
  },
  {
    path: 'user',
    component: UserComponent,
    data: {
      name: 'Gustavo',
      cpf: '12345678910',
      endereco: 'Rua dos Bobos, nº 0',
      email: 'Gustavo@gmail.com'
    }
  },
  { path: 'adm-home', component: HomeAdmComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'filter-products', component: FilterProductsComponent },
  { path: 'create-product', component: CreateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
