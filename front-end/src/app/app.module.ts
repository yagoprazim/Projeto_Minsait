import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastraProdutosComponent } from './pages/cadastra-produtos/cadastra-produtos.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EditaProdutosComponent } from './pages/edita-produtos/edita-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProdutosComponent,
    CadastraProdutosComponent,
    FormularioComponent,
    EditaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
