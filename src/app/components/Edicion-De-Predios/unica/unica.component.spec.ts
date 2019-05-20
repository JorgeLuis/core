import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicaComponent } from './unica.component';

describe('UnicaComponent', () => {
  let component: UnicaComponent;
  let fixture: ComponentFixture<UnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
