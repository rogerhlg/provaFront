import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  baseUrl = "http://localhost:1234/";

  constructor(private http: HttpClient) { }

  listar(): Observable<Pessoa[]>{ 
    return this.http.get<Pessoa[]>(`${this.baseUrl}pessoa/listar`);
  }

  cadastrar(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(`${this.baseUrl}pessoa/cadastrar`, pessoa);
  }
}
