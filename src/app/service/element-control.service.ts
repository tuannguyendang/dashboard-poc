import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElementBase } from '../element/element-base';


@Injectable(
  {
    providedIn: 'root',
  }
)
export class ElementControlService {
  constructor() { }

  toFormGroup(elements: Map<any, ElementBase<any>[]>) {
    const group: any = {};

    elements.forEach(function (value, key) {
      value.forEach(element => {
        group[element.key] = element.required ? new FormControl(element.value || '', Validators.required)
          : new FormControl(element.value || '');
      });
    })
    return new FormGroup(group);
  }
}
