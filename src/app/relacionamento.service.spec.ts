import { TestBed } from '@angular/core/testing';

import { RelacionamentoService } from './relacionamento.service';

describe('RelacionamentoService', () => {
  let service: RelacionamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelacionamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
