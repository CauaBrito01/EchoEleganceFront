import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Adicionando o FormsModule
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
    PdpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  // Adicionando o FormsModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }