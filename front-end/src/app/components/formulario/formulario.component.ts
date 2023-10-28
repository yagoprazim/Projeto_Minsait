import { Component, Input} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  constructor(private produtoService: ProdutoService) {}

  //Estabelecendo os inputs para serem utilizados por 'cadastrar' e 'editar'
  @Input() produtoForm: FormGroup = this.produtoService.pegarProdutoForm();
  @Input() textoBotao: string = 'Enviar';
  @Input() corBotao: string = 'btn-success';

  //Funções para usar no tratamento das validações no html (para legibilidade):
  get nome() {
    return this.produtoForm.get('nome');
  }
  get codigoBarras() {
    return this.produtoForm.get('codigoBarras');
  }
  get preco() {
    return this.produtoForm.get('preco');
  }
}
