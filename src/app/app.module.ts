import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RelacionamentoListagemComponent } from './relacionamento-listagem/relacionamento-listagem.component';
import { RelacionamentoService } from './relacionamento.service';

@NgModule({
  declarations: [
    AppComponent,
    RelacionamentoListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ RelacionamentoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
