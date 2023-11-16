import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { DivisorComponent } from './components/divisor/divisor.component';
import { FilterCardComponent } from './components/filter-card/filter-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PdpComponent } from './pages/pdp/pdp.component';
import { UserComponent } from './pages/user/user.component';
import { AdmLoginComponent } from './pages/adm-login/adm-login.component';
import { AdmCadastroComponent } from './pages/adm-cadastro/adm-cadastro.component';
import { HomeAdmComponent } from './pages/home-adm/home-adm.component';
import { AdmProductCardComponent } from './components/adm-product-card/adm-product-card.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { FilterProductsComponent } from './pages/filter-products/filter-products.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CustomButtonComponent,
    LoginComponent,
    CadastroComponent,
    NavbarComponent,
    HomeComponent,
    DivisorComponent,
    FilterCardComponent,
    ProductCardComponent,
    PdpComponent,
    UserComponent,
    AdmLoginComponent,
    AdmCadastroComponent,
    HomeAdmComponent,
    AdmProductCardComponent,
    EditProductComponent,
    StarRatingComponent,
    FilterProductsComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
