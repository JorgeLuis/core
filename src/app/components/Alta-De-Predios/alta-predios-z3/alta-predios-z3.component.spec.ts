import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPrediosZ3Component } from './alta-predios-z3.component';

describe('AltaPrediosZ3Component', () => {
  let component: AltaPrediosZ3Component;
  let fixture: ComponentFixture<AltaPrediosZ3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPrediosZ3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPrediosZ3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
