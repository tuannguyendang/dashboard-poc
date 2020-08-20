import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementBase } from '../element/element-base';

@Component({
  selector: 'app-dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html',
  styleUrls: ['./dynamic-form-element.component.css']
})
export class DynamicFormElementComponent {

  @Input() question: ElementBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}