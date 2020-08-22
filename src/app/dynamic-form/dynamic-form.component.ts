import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementBase } from '../element/element-base';
import { ElementControlService } from '../service/element-control.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ElementControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() elements: Map<string, ElementBase<any>[]>;
  form: FormGroup;
  payLoad = '';

  constructor(private ecs: ElementControlService) { }

  ngOnInit() {
    console.log(this.elements);
    this.form = this.ecs.toFormGroup(this.elements);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    alert("Data submited : " + this.payLoad);
  }
}