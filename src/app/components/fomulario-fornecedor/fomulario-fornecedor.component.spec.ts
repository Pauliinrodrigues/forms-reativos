import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioFornecedorComponent } from './fomulario-fornecedor.component';

describe('FomularioFornecedorComponent', () => {
  let component: FomularioFornecedorComponent;
  let fixture: ComponentFixture<FomularioFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomularioFornecedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FomularioFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
