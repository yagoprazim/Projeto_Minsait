import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from 'src/app/interfaces/produto';
import { AlertaService } from 'src/app/services/alerta.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos$ = new Observable<IProduto[]>();

  constructor(private produtoService: ProdutoService, private alertaService: AlertaService){}

  ngOnInit(){
    this.produtos$ = this.produtoService.listarProdutos();
  }
  
  deletar(id: number) {
    this.alertaService.exibirConfirmacao('Excluir Produto', 'Você tem certeza que deseja excluir o produto?')
      .then((result) => {
        if (result.isConfirmed) {
          this.produtoService.deletarProduto(id).subscribe(() => {
            this.alertaService.exibirSucesso('Produto Excluído', 'O produto foi excluído com sucesso.');
            this.produtos$ = this.produtoService.listarProdutos();
          });
        }
      });
  }
  
}
