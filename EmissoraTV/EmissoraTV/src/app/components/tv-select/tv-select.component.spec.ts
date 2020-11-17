import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSelectComponent } from './tv-select.component';

describe('TvSelectComponent', () => {
  let component: TvSelectComponent;
  let fixture: ComponentFixture<TvSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
