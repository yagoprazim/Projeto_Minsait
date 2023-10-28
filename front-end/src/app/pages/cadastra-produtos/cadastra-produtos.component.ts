import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastra-produtos',
  templateUrl: './cadastra-produtos.component.html',
  styleUrls: ['./cadastra-produtos.component.css']
})
export class CadastraProdutosComponent {

  constructor(private produtoService: ProdutoService){}

  produtoForm: FormGroup = this.produtoService.pegarProdutoForm();
  
  cadastrar() {
    if (this.produtoForm.valid) {
      this.produtoService.criarProduto(this.produtoForm.value).subscribe(
        (response) => {
          Swal.fire('Produto Cadastrado', 'O produto foi cadastrado com sucesso.', 'success');
          this.produtoForm.reset();
        },
        (error) => {
          const { message } = error;
          Swal.fire('Erro', message, 'error');
          this.produtoForm.reset();
        }
      );
    }
  }
}

