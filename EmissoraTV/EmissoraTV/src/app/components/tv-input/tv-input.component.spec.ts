import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvInputComponent } from './tv-input.component';

describe('TvInputComponent', () => {
  let component: TvInputComponent;
  let fixture: ComponentFixture<TvInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
