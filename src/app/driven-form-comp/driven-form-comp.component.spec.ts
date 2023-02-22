import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenFormCompComponent } from './driven-form-comp.component';

describe('DrivenFormCompComponent', () => {
  let component: DrivenFormCompComponent;
  let fixture: ComponentFixture<DrivenFormCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivenFormCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivenFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
