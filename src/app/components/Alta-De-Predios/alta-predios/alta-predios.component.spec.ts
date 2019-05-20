import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPrediosComponent } from './alta-predios.component';

describe('AltaPrediosComponent', () => {
  let component: AltaPrediosComponent;
  let fixture: ComponentFixture<AltaPrediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPrediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPrediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
