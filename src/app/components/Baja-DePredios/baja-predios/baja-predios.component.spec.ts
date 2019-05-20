import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaPrediosComponent } from './baja-predios.component';

describe('BajaPrediosComponent', () => {
  let component: BajaPrediosComponent;
  let fixture: ComponentFixture<BajaPrediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaPrediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaPrediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
