import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome!: string;
  idade!: string;
  cpf!: string;

  constructor(private pessoaService: PessoaService) { 
    
  }

  ngOnInit(): void {
    // pessoaService.cadastrar().subscribe((pessoas) =>{
    //   this.pessoas = pessoas;
    // });
  }

  cadastrar(): void {
    let pessoa = new Pessoa();
    pessoa.nome = this.nome;
    pessoa.idade = parseInt(this.idade);
    pessoa.cpf = this.cpf;
    console.log(pessoa.nome);
    this.pessoaService.cadastrar(pessoa).subscribe((pessoa) =>{
      console.log(pessoa);
    });

  }
}
