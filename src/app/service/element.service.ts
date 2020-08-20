import { Injectable } from '@angular/core';

import { DropdownElement } from '../element/element-dropdown';
import { ElementBase } from '../element/element-base';
import { TextboxElement } from '../element/element-textbox';
import { DatePickerElement } from '../element/element-date-picker';
import { of, Observable } from 'rxjs';
import *  as  form_template from '../../assets/GetLayout_HL_Json.json';

@Injectable()
export class ElementService {

  getQuestions(): Observable<Map<string, ElementBase<any>[]>> {
    let groupQuestions = new Map<string, ElementBase<any>[]>();

    let layout = (form_template as any).default.layoutMasterData;
    layout.forEach(element => {
      let fieldMasters = element.fieldMasterData;
      fieldMasters.forEach(input_template => {
        let questions: ElementBase<string>[] = [];
        if (groupQuestions.has(input_template.srclayoutid)) {
          questions = groupQuestions.get(input_template.srclayoutid);
        }
        if (input_template.fieldcomponenttype == 'TextField') {
          questions.push(new TextboxElement({
            key: input_template.fieldname,
            label: input_template.fielddispname,
            type: input_template.fielddatatype,
            required: 'Y' == input_template.ismandatory ? true : false,
            order: 2
          }));
        }
        else if (input_template.fieldcomponenttype == 'CodeListDropDown') {
          questions.push(new DropdownElement({
            key: input_template.fieldname,
            label: input_template.fielddispname,
            options: [{ key: 'SMS', value: 'SMS' }, { key: 'Phone_Call', value: 'Phone Call' }, { key: 'Email', value: 'Email' }, { key: 'Refer', value: 'Refer' }],
            order: 3
          }));
        }
        else if (input_template.fieldcomponenttype == 'DatePicker') {
          questions.push(new DatePickerElement({
            key: input_template.fieldname,
            label: input_template.fielddispname,
            order: 1
          }));
        }
        else {

        }
        questions.sort((a, b) => a.order - b.order);
        groupQuestions.set(input_template.srclayoutid, questions);
      })
    });
    return of(groupQuestions);
  }
}
