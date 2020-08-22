import { Type } from '@angular/core';
import { ExpansionData } from './expansion-data';

export class ExpansionItem {
  constructor(public component: Type<any>, public data: ExpansionData) { }
}