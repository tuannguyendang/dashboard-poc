import { FormGroup } from "@angular/forms";

export class ItemLayout {
    formGroups: FormGroup[] = [];

    constructor(formGroups: FormGroup[]) {
        this.formGroups = formGroups;
    }
}