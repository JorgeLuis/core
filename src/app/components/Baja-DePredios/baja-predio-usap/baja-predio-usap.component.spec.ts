import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaPredioUsapComponent } from './baja-predio-usap.component';

describe('BajaPredioUsapComponent', () => {
  let component: BajaPredioUsapComponent;
  let fixture: ComponentFixture<BajaPredioUsapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaPredioUsapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaPredioUsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
