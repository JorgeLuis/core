import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaUnicaComponent } from './baja-unica.component';

describe('BajaUnicaComponent', () => {
  let component: BajaUnicaComponent;
  let fixture: ComponentFixture<BajaUnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaUnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
