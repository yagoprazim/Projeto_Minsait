import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastraProdutosComponent } from './pages/cadastra-produtos/cadastra-produtos.component';
import { AtualizaProdutosComponent } from './pages/atualiza-produtos/atualiza-produtos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'produtos/cadastrar', component: CadastraProdutosComponent},
  {path: 'produtos/atualizar/:id', component: AtualizaProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
