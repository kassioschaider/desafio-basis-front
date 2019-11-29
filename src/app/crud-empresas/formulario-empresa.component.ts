import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa.component';
import { EmpresaService } from './empresa.service';

@Component({
  selector: 'formulario-empresa',
  templateUrl: './formulario-empresa.component.html'
})
export class FormularioEmpresaComponent implements OnInit {

  empresa: any = {
    nome: '',
    cnpj: '',
    endereco: ''
  }

  empresas: Empresa[];

  constructor(
    private empresaService: EmpresaService) { }

  ngOnInit() {
    this.getAllEmpresas();
  }

  getAllEmpresas() {
    this.empresaService
      .getAllEmpresas()
      .subscribe(dados => { this.empresas = <Empresa[]>dados })
  }

  onSave() {
    this.empresaService
      .addEmpresa(this.empresa)
      .subscribe(dados => dados);
  }

  getEmpresa(id: number) {
    return this.empresaService
      .getEmpresa(id)
      .subscribe(dados => dados);
  }

  onDelete(id: number) {
    this.empresaService
      .deletarEmpresa(id)
      .subscribe(dados => dados);
  }

}
