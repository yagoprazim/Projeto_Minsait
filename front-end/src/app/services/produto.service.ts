import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  api = 'http://localhost:8080/api/produtos'

  constructor(private http:HttpClient) {}

  listarProdutos(){
    return this.http.get<IProduto[]>(this.api);
  }

  criarProduto(produto: IProduto){
    return this.http.post<IProduto>(this.api, produto)
  }


}
