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

  getAllEmpresas() {
    this.empresaService
      .getAllEmpresas()
      .subscribe(dados => { this.empresas = <Empresa[]>dados })
  }

  onSave() {
    this.empresaService.addEmpresa(this.empresa);
  }

  ngOnInit() {
    this.getAllEmpresas();
  }

}
