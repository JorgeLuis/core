import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaMasivaUsapComponent } from './baja-masiva-usap.component';

describe('BajaMasivaUsapComponent', () => {
  let component: BajaMasivaUsapComponent;
  let fixture: ComponentFixture<BajaMasivaUsapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaMasivaUsapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaMasivaUsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
