import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  public produtos$ = new Observable<IProduto[]>();

  constructor(private produtoService: ProdutoService){}

  ngOnInit(){
    this.produtos$ = this.produtoService.listarProdutos();
  }

  deletar(id: number) {
    Swal.fire({
    title: 'Deletar produto',
    text: "Você tem certeza que deseja deletar o produto?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não'
  }).then((result) => {
    if (result.isConfirmed) {
      this.produtoService.deletarProduto(id).subscribe(() => {
        Swal.fire(
          'Deletado.',
          'Seu produto foi deletado com sucesso.',
          'success'
        );
        this.produtos$ = this.produtoService.listarProdutos();
      });
    }
  });
  }

}
