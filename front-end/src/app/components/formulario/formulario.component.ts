import { Component, Input} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  //Estabelecendo o default para ser substituído depois pelos components de cadastro e edição:
  @Input() produtoForm: FormGroup = new FormGroup({
    nome: new FormControl(),
    codigoBarras: new FormControl(),
    preco: new FormControl()
  });
  @Input() textoBotao: string = 'Enviar';

  //Funções para chamar no tratamento das validações (para legibilidade):
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
