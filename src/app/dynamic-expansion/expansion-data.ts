import { ElementBase } from '../element/element-base';
import { ElementLayout } from '../element/element-layout';

export class ExpansionData {
    label: ElementLayout;
    content: Map<string, ElementBase<any>[]>;

    constructor(label: ElementLayout, content: Map<string, ElementBase<any>[]>) {
        this.label = label;
        this.content = content;
    }
}