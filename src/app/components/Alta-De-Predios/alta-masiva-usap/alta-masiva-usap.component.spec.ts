import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMasivaUsapComponent } from './alta-masiva-usap.component';

describe('AltaMasivaUsapComponent', () => {
  let component: AltaMasivaUsapComponent;
  let fixture: ComponentFixture<AltaMasivaUsapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMasivaUsapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMasivaUsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
