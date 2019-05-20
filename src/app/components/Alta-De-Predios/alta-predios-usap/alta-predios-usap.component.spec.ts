import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPrediosUsapComponent } from './alta-predios-usap.component';

describe('AltaPrediosUsapComponent', () => {
  let component: AltaPrediosUsapComponent;
  let fixture: ComponentFixture<AltaPrediosUsapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPrediosUsapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPrediosUsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
