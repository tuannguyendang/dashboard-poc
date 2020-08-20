import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ElementBase } from '../element/element-base';

@Injectable()
export class ElementControlService {
  constructor() { }

  toFormGroup(questions: Map<any, ElementBase<any>[]> ) {
    const group: any = {};
    
    questions.forEach(function(value, key) {
      console.log(key + ' = ' + value);
      value.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    })
    // questions.forEach(question => {
    //   group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
    //                                           : new FormControl(question.value || '');
    // });
    return new FormGroup(group);
  }
}
