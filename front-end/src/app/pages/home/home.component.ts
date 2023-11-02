import { Component } from '@angular/core';
import { IData } from 'src/app/interfaces/data';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: IData[] = [];

  constructor(private produtoService: ProdutoService) { }

  //Mapeia 'Data' para receber os dados 'nome' e 'preco' dos Produtos.
  ngOnInit(){
    this.produtoService.listarProdutos().subscribe((produtos: IProduto[]) => {
      this.data = produtos.map(produto => ({
        name: produto.nome,
        value: produto.preco
      }));
    });
  }

}
