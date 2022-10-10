import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba12Component } from './prueba12.component';

describe('Prueba12Component', () => {
  let component: Prueba12Component;
  let fixture: ComponentFixture<Prueba12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueba12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
