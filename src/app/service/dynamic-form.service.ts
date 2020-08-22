import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementBase } from '../element/element-base';
import { ElementControlService } from './element-control.service';

@Injectable({
    providedIn: 'root',
})
export class DynamicFormService {
    constructor(private ecs: ElementControlService) { }

    buildDynamicForms(elements: Map<any, ElementBase<any>[]>): FormGroup {
        return this.ecs.toFormGroup(elements);
    }

}