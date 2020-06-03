import { Component, OnInit } from '@angular/core';
import { RelacionamentoService } from '../relacionamento.service';

@Component({
  selector: 'app-relacionamento-listagem',
  templateUrl: './relacionamento-listagem.component.html',
  styleUrls: ['./relacionamento-listagem.component.css']
})
export class RelacionamentoListagemComponent implements OnInit {

  relacionamentos: Array<any>;

  constructor(private relacionamentoService: RelacionamentoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.relacionamentoService.listar().subscribe(dados => this.relacionamentos = dados);
  }

}
