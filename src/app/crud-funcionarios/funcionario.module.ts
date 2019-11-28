import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { FormularioFuncionarioComponent } from './formulario-funcionario.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FormularioFuncionarioComponent],
  imports: [FormsModule, HttpClientModule, CommonModule],
  exports: [
    FormularioFuncionarioComponent]
})
export class FuncionarioModule { }
