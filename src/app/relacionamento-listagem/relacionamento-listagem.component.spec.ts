import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionamentoListagemComponent } from './relacionamento-listagem.component';

describe('RelacionamentoListagemComponent', () => {
  let component: RelacionamentoListagemComponent;
  let fixture: ComponentFixture<RelacionamentoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacionamentoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionamentoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
