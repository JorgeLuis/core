import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasivaComponent } from './masiva.component';

describe('MasivaComponent', () => {
  let component: MasivaComponent;
  let fixture: ComponentFixture<MasivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
