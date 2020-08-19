import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import *  as  form_template from '../../assets/GetLayout_HL_Json.json';

@Injectable()
export class QuestionService {

  getQuestions() {
    let questions: QuestionBase<string>[] = [];
    let sample = (form_template as any).default.layoutMasterData[0].fieldMasterData;

    sample.forEach(input_template => {
      if (input_template.fieldcomponenttype == 'TextField') {
        questions.push(new TextboxQuestion({
          key: input_template.fieldname,
          label: input_template.fielddispname,
          type: input_template.fielddatatype,
          required: 'Y' == input_template.ismandatory ? true : false,
          order: 2
        }));
      }
      else if (input_template.fieldcomponenttype == 'CodeListDropDown') {
        questions.push(new DropdownQuestion({
          key: input_template.fieldname,
          label: input_template.fielddispname,
          options: [{ key: 'SMS', value: 'SMS' },{ key: 'Phone_Call', value: 'Phone Call' },{ key: 'Email', value: 'Email' },{ key: 'Refer', value: 'Refer' }],
          order: 3
        }));
      }
      else {

      }
    })

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
