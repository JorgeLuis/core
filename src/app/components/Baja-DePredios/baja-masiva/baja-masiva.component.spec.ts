import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaMasivaComponent } from './baja-masiva.component';

describe('BajaMasivaComponent', () => {
  let component: BajaMasivaComponent;
  let fixture: ComponentFixture<BajaMasivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaMasivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaMasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
