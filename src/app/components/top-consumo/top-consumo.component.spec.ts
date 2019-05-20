import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopConsumoComponent } from './top-consumo.component';

describe('TopConsumoComponent', () => {
  let component: TopConsumoComponent;
  let fixture: ComponentFixture<TopConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
