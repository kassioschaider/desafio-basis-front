import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormularioEmpresaComponent } from './formulario-empresa.component';

@NgModule({
  declarations: [FormularioEmpresaComponent],
  imports: [FormsModule, HttpClientModule, CommonModule],
  exports: [FormularioEmpresaComponent]
})
export class EmpresaModule { }
