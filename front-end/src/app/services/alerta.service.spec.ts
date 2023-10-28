import { TestBed } from '@angular/core/testing';

import { AlertaService } from './alerta.service';

describe('AlertasService', () => {
  let service: AlertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
