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
  
  //Função que cadastra um produto quando houver interação com o botão.
  cadastrar() {
    if (this.produtoForm.valid) {
      this.produtoService.criarProduto(this.produtoForm.value).subscribe(
        (response) => {
          this.alertaService.exibirSucessoComRedirecionamento('Produto Cadastrado', 'O produto foi cadastrado com sucesso.');
          this.produtoForm.reset();
        },
        (error) => {
          this.alertaService.exibirErro('Erro ao Cadastrar', 'Não foi possível cadastrar o produto.');
          this.produtoForm.reset();
        }
      );
    }
  }
}

