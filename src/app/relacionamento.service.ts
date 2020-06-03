import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelacionamentoService {

  relacionamentoURL = 'http://localhost:9040/relacionamento';

  constructor(private http: HttpClient){}

  listar(){
    return this.http.get<any[]>(`${this.relacionamentoURL}`);
  }

}
