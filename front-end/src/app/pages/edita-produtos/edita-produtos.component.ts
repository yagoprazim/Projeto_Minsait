import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edita-produtos',
  templateUrl: './edita-produtos.component.html',
  styleUrls: ['./edita-produtos.component.css']
})
export class EditaProdutosComponent {

  produtoForm: FormGroup = this.produtoService.pegarProdutoForm();
  produtoId!: number;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) {}

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
  
  editar() {
    if (this.produtoForm.valid) {
      const produto = { ...this.produtoForm.value, id: this.produtoId };
      this.produtoService.atualizarProduto(produto).subscribe(
        (response) => {
          Swal.fire('Produto Atualizado', 'O produto foi atualizado com sucesso.', 'success').then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/produtos']);
            }
          });
        },
        (error) => {
          const { message } = error;
          Swal.fire('Erro', message, 'error');
        }
      );
    }
  }
}


