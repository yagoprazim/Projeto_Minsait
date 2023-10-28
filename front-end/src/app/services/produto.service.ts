import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from '../interfaces/produto';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  api = 'http://localhost:8080/api/produtos'

  constructor(private http:HttpClient) {}

  //Funções  principais:  
  listarProdutos(){
    return this.http.get<IProduto[]>(this.api);
  }

  criarProduto(produto: IProduto){
    return this.http.post<IProduto>(this.api, produto);
  }

  atualizarProduto(produto: IProduto){
    return this.http.put<IProduto>(this.api, produto);
  }

  deletarProduto(id: number){
    return this.http.delete<IProduto>(`${this.api}/${id}`);
  }

  //Funções complementares:
  pegarProdutoPorId(id: number) {
    return this.http.get<IProduto>(`${this.api}/${id}`);
  }

  pegarProdutoForm(): FormGroup {
    return new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      codigoBarras: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      preco: new FormControl(1.00, [Validators.required, 
        Validators.max(99999999999999999999999999999999999), 
        Validators.pattern(/^(?!0*(\.0{1,2})?$)[0-9]+(\.[0-9]{1,2})?$/)
      ])
    });
  }
  
}
