import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { AlertaService } from 'src/app/services/alerta.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastra-produtos',
  templateUrl: './cadastra-produtos.component.html',
  styleUrls: ['./cadastra-produtos.component.css']
})
export class CadastraProdutosComponent {

  produtoForm: FormGroup = this.produtoService.pegarProdutoForm();

  constructor(private produtoService: ProdutoService, private alertaService: AlertaService){}
  
  cadastrar() {
    if (this.produtoForm.valid) {
      this.produtoService.criarProduto(this.produtoForm.value).subscribe(
        (response) => {
          this.alertaService.exibirSucesso('Produto Cadastrado', 'O produto foi cadastrado com sucesso.');
          this.produtoForm.reset();
        },
        (error) => {
          const { message } = error;
          this.alertaService.exibirErro('Erro', message);
          this.produtoForm.reset();
        }
      );
    }
  }
}

