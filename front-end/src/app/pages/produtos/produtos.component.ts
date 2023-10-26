import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos$ = new Observable<IProduto[]>();

  constructor(private produtoService: ProdutoService){}

  ngOnInit(){
    this.produtos$ = this.produtoService.listarProdutos();
  }

}
