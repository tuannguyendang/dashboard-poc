import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElementBase } from '../element/element-base';
import { ElementControlService } from '../service/element-control.service'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ ElementControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: Map<any, ElementBase<any>[]>;
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: ElementControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    alert("Data submited : " + this.payLoad);
  }

}