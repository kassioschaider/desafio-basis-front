import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empresa } from './empresa.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.http
      .post(this.resouceUrl, JSON.stringify(empresa), this.httpOptions);
  }

  getEmpresa(id: number) {
    return this.http
      .post(this.resouceUrl + '/' + JSON.stringify(id), this.httpOptions);
  }

  deletarEmpresa(id: number) {
    return this.http
      .delete(this.resouceUrl + '/' + JSON.stringify(id), this.httpOptions);
  }
}
