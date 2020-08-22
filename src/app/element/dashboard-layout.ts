import { ItemLayout } from "./item-layout";

export class DashBoardLayout {
    itemLayouts: ItemLayout[] = [];

    constructor(itemLayouts: ItemLayout[]) {
        this.itemLayouts = itemLayouts;
    }
}