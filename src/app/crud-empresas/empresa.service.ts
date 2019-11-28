import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empresa } from './empresa.component';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmpresaService {

  private resouceUrl = environment.apiUrl + '/empresas';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllEmpresas() {
    return this.http.get(this.resouceUrl);
  }

  addEmpresa(empresa: Empresa) {
    this.http
      .post(this.resouceUrl, JSON.stringify(empresa), this.httpOptions)
      .pipe()
      .subscribe(dados => dados);
  }
}
