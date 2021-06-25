import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  colunasPessoa = ["nome", "cpf", "idade"];
  pessoas : Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { 
  }

  ngOnInit(): void {
    this.pessoaService.listar().subscribe((pessoas) =>{
      this.pessoas = pessoas;
    });
  }

}
