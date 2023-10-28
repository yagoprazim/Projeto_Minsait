import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  exibirSucesso(titulo: string, mensagem: string) {
    Swal.fire(titulo, mensagem, 'success');
  }

  exibirErro(titulo: string, mensagem: string) {
    Swal.fire(titulo, mensagem, 'error');
  }

  exibirConfirmacao(titulo: string, mensagem: string) {
    return Swal.fire({
      title: titulo,
      text: mensagem,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    });
  }
}
