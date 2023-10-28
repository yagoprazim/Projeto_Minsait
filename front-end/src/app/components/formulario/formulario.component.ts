import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  //Estabelecendo o default para ser substituído depois:
  @Input() produtoForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    codigoBarras: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    preco: new FormControl(1, Validators.required)
  });
  @Input() textoBotao: string = 'Submit';
  @Output() enviarFormulario = new EventEmitter<void>();

  //Função para disparar o evento:
  enviar() {
    if (this.produtoForm.valid) {
      this.enviarFormulario.emit();
    }
  }

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
