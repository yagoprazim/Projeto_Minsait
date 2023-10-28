import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaProdutosComponent } from './atualiza-produtos.component';

describe('AtualizaProdutosComponent', () => {
  let component: AtualizaProdutosComponent;
  let fixture: ComponentFixture<AtualizaProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizaProdutosComponent]
    });
    fixture = TestBed.createComponent(AtualizaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
