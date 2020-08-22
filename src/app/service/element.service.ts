import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as form_template from '../../assets/GetLayout_HL_Json.json';
import { ElementBase } from '../element/element-base';
import { DatePickerElement } from '../element/element-date-picker';
import { DropdownElement } from '../element/element-dropdown';
import { ElementLayout } from '../element/element-layout';
import { TextboxElement } from '../element/element-textbox';


@Injectable({
  providedIn: 'root',
})
export class ElementService {

  getLayouts(): Observable<[ElementLayout, Map<string, ElementBase<any>[]>][]> {
    let layouts: [ElementLayout, Map<string, ElementBase<any>[]>][] = [];

    let layout = (form_template as any).default.layoutMasterData;
    layout.forEach(element => {
      let fieldMasters = element.fieldMasterData;
      let elementLayout = new ElementLayout({
        stylename: element.stylename,
        screeenheader: element.screeenheader,
        screenid: element.screenid,
        reqmastid: element.reqmastid,
        parentscreenlayoutid: element.parentscreenlayoutid,
        noofcolumns: element.noofcolumns,
        layouttype: element.layouttype,
        layoutsubsec: element.layoutsubsec,
        layoutseq: element.layoutseq,
        iscollapsable: element.iscollapsable,
        isallreadonly: element.isallreadonly,
        isactive: element.isactive,
        expendratio: element.expendratio,
        alignment: element.alignment
      });

      let groupLayouts = new Map<string, ElementBase<any>[]>();

      fieldMasters.forEach(input_template => {
        let questions: ElementBase<string>[] = [];
        if (groupLayouts.has(input_template.srclayoutid)) {
          questions = groupLayouts.get(input_template.srclayoutid);
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
            options: [{ key: 'sample', value: 'sample' }],
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
        groupLayouts.set(input_template.srclayoutid, questions);
      })
      layouts.push([elementLayout, groupLayouts]);
    });
    return of(layouts);
  }
}
