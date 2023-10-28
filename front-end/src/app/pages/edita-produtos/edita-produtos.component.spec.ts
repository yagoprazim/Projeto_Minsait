import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaProdutosComponent } from './edita-produtos.component';

describe('EditaProdutosComponent', () => {
  let component: EditaProdutosComponent;
  let fixture: ComponentFixture<EditaProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditaProdutosComponent]
    });
    fixture = TestBed.createComponent(EditaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
