import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionTableComponent } from './organizacion-table.component';

describe('OrganizacionTableComponent', () => {
  let component: OrganizacionTableComponent;
  let fixture: ComponentFixture<OrganizacionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
