import { Type } from '@angular/core';
import { TabData } from './tab-data';

export class TabItem {
  constructor(public component: Type<any>, public data: TabData) { }
}