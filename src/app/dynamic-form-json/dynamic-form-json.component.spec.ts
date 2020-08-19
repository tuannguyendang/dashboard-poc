import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormJsonComponent } from './dynamic-form-json.component';

describe('DynamicFormJsonComponent', () => {
  let component: DynamicFormJsonComponent;
  let fixture: ComponentFixture<DynamicFormJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
