import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../services/cliente';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService {

  private clientesUrls: string;
  private clientesUrlsNome: string;
  private clientesUrlsTelefone: string;

  constructor(private http: HttpClient) {
    this.clientesUrls = 'http://localhost:8090/services/cliente/';
  }

  public findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrls);
  }

  public save(cliente: Cliente) {
    return this.http.post<Cliente>(this.clientesUrls, cliente);
  }

  public findByNome(nome: string): Observable<Cliente[]> {
    this.clientesUrlsNome = this.clientesUrls+"nome/";
    return this.http.get<Cliente[]>(this.clientesUrlsNome+nome);
  }

  public findByTelefone(telefone: string): Observable<Cliente[]> {
    this.clientesUrlsTelefone = this.clientesUrls+"telefone/";
    return this.http.get<Cliente[]>(this.clientesUrlsTelefone+telefone);
  }

  public delete (cpf: string){
      return this.http.delete(this.clientesUrls+cpf);
  }

  public update (cliente: Cliente) {
      return this.http.put<Cliente>(this.clientesUrls, cliente);
  }
}