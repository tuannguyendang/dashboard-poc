import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormNumberComponent } from './dynamic-form-number.component';

describe('DynamicFormNumberComponent', () => {
  let component: DynamicFormNumberComponent;
  let fixture: ComponentFixture<DynamicFormNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
