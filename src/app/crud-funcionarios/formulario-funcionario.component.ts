import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './funcionario.component';
import { Empresa } from '../crud-empresas/empresa.component';
import { EmpresaService } from '../crud-empresas/empresa.service';

@Component({
  selector: 'formulario-funcionario',
  templateUrl: './formulario-funcionario.component.html'
})
export class FormularioFuncionarioComponent implements OnInit {

  funcionario: any = {
    nome: '',
    dataDeNascimento: '',
    cpf: '',
    idEmpresa: 1
  }

  funcionarios: Funcionario[];
  empresas: Empresa[];

  constructor(
    private funcionarioSevice: FuncionarioService,
    private empresaService: EmpresaService) { }

  getAllFuncionarios() {
    this.funcionarioSevice
      .getAllFuncionarios()
      .subscribe(dados => { this.funcionarios = <Funcionario[]>dados })
  }

  getAllEmpresas() {
    this.empresaService
      .getAllEmpresas()
      .subscribe(dados => { this.empresas = <Empresa[]>dados })
  }

  onSubmit() {
    this.funcionarioSevice.addFuncionario(this.funcionario);
  }

  ngOnInit() {
    this.getAllFuncionarios();
    this.getAllEmpresas();
  }

}
