import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminByIdComponent } from './admin-by-id.component';

describe('AdminByIdComponent', () => {
  let component: AdminByIdComponent;
  let fixture: ComponentFixture<AdminByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
