import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoAdminComponent } from './repo-admin.component';

describe('RepoAdminComponent', () => {
  let component: RepoAdminComponent;
  let fixture: ComponentFixture<RepoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
