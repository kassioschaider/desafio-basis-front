import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Funcionario } from './funcionario.component';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FuncionarioService {

  private resouceUrl = environment.apiUrl + '/funcionarios';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllFuncionarios() {
    return this.http.get(this.resouceUrl);
  }

  addFuncionario(funcionario: Funcionario) {
    return this.http
      .post(this.resouceUrl, JSON.stringify(funcionario), this.httpOptions);
  }

  deletarFuncionario(id: number) {
    return this.http.delete(this.resouceUrl + '/' + JSON.stringify(id), this.httpOptions);
  }
}
