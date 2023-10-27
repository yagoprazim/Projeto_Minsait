import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastra-produtos',
  templateUrl: './cadastra-produtos.component.html',
  styleUrls: ['./cadastra-produtos.component.css']
})
export class CadastraProdutosComponent {

  exibirErro: boolean = false;

  constructor(private produtoService: ProdutoService){}

  produtoForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', Validators.required),
    preco: new FormControl(1, Validators.required)
  })
  
  cadastrar() {
    if(this.produtoForm.valid){
      this.produtoService.criarProduto(this.produtoForm.value).subscribe(
        response => {
          Swal.fire('Produto Cadastrado', 'O produto foi cadastrado com sucesso.', 'success');
          this.produtoForm.reset();
        },
        error => {
          Swal.fire('Erro', 'Erro ao cadastrar produto, tente novamente.', 'error');
          this.produtoForm.reset();
        }
      )
    }else {
      this.produtoForm.markAllAsTouched();
      this.exibirErro = true;
    } 
  }
}
