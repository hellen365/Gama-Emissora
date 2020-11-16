import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasContratacaoComponent } from './minhas-contratacao.component';

describe('MinhasContratacaoComponent', () => {
  let component: MinhasContratacaoComponent;
  let fixture: ComponentFixture<MinhasContratacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasContratacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasContratacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
