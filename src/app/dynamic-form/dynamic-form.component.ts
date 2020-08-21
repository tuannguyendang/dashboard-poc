import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElementBase } from '../element/element-base';
import { ElementControlService } from '../service/element-control.service'
import { ElementLayout } from '../element/element-layout';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ElementControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() layouts: [ElementLayout, Map<string, ElementBase<any>[]>][];
  elements: Map<any, ElementBase<any>[]> = new Map();
  form: FormGroup;
  payLoad = '';

  constructor(private ecs: ElementControlService) { }

  ngOnInit() {
    // let form: Map<any, ElementBase<any>[]>;
    //get all layout
    //create layout
    //create form in each layout
    this.layouts.forEach(el => {
      let layout: ElementLayout = el[0];
      let elementInLayouts: Map<string, ElementBase<any>[]> = el[1];
      this.generateLayout(layout);
      this.generateFormForLayout(elementInLayouts);

      for (let key of el[1].keys()) {
        this.elements.set(key, el[1].get(key));
      }
    })
    this.form = this.ecs.toFormGroup(this.elements);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    alert("Data submited : " + this.payLoad);
  }

  generateLayout(elementLayout: ElementLayout) {
    console.log('generate layout form ' + elementLayout);
  }

  generateFormForLayout(elementInLayouts: Map<string, ElementBase<any>[]>) {
    console.log('generate form ' + elementInLayouts);
    // this.form = this.ecs.toFormGroup(form);
  }
}