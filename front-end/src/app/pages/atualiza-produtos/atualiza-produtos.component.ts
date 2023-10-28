import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/interfaces/produto';
import { AlertaService } from 'src/app/services/alerta.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-atualiza-produtos',
  templateUrl: './atualiza-produtos.component.html',
  styleUrls: ['./atualiza-produtos.component.css']
})
export class AtualizaProdutosComponent {

  produtoForm: FormGroup = this.produtoService.pegarProdutoForm();
  produtoId!: number;

  constructor(private produtoService: ProdutoService, private alertaService: AlertaService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.produtoId = this.route.snapshot.params['id'];
    this.produtoService.pegarProdutoPorId(this.produtoId).subscribe(
      (produto) => {
        if (produto) {
          this.produtoForm.patchValue(produto);
        } else {
          //fazer página de erro...
          this.router.navigate(['/produtos']);
        }
      }
    );
  }
  
  atualizar() {
    if (this.produtoForm.valid) {
      const produto: IProduto = { ...this.produtoForm.value, id: this.produtoId };
      this.produtoService.atualizarProduto(produto).subscribe(
        (response) => {
          this.alertaService.exibirSucessoComRedirecionamento('Produto Atualizado', 'O produto foi atualizado com sucesso.');
        },
        (error) => {
          const { message } = error;
          this.alertaService.exibirErro('Erro', message);
        }
      );
    }
  }
}


