import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba13Component } from './prueba13.component';

describe('Prueba13Component', () => {
  let component: Prueba13Component;
  let fixture: ComponentFixture<Prueba13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueba13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
