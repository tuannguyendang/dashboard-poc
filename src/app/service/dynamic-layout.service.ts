import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementBase } from '../element/element-base';
import { ElementLayout } from '../element/element-layout';
import { ItemLayout } from '../element/item-layout';
import { DynamicFormService } from './dynamic-form.service';

@Injectable({
    providedIn: 'root',
})
export class DynamicLayoutService {

    constructor(private dfs: DynamicFormService) { }

    buildDynamicLayout(layouts: [ElementLayout, Map<string, ElementBase<any>[]>][]) {
        let itemLayouts: ItemLayout[] = [];
        let formGroups: FormGroup[] = [];
        layouts.forEach(el => {
            let layout: ElementLayout = el[0];
            let elementInLayouts: Map<string, ElementBase<any>[]> = el[1];
            formGroups.push(this.dfs.buildDynamicForms(elementInLayouts));
            let itemLayout: ItemLayout = new ItemLayout(formGroups);
            itemLayouts.push(itemLayout);
        })
    }

}