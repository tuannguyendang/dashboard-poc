import { Component, Input } from '@angular/core';
import { ElementBase } from '../element/element-base';
import { ElementLayout } from '../element/element-layout';
import { ExpansionContentComponent } from './expansion-content.component';
import { ExpansionData } from './expansion-data';
import { ExpansionItem } from './expansion-item';

/**
 * 
 */
@Component({
  selector: 'app-dynamic-expand-collapse',
  templateUrl: 'dynamic-expansion-collapse.component.html',
  styleUrls: ['dynamic-expansion-collapse.component.css'],
})
export class DynamicExpansionCollapseComponent {
  @Input() layouts: [ElementLayout, Map<string, ElementBase<any>[]>][];

  expansions: ExpansionItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.layouts.forEach(el => {
      let layout: ElementLayout = el[0];
      let elementInLayouts: Map<string, ElementBase<any>[]> = el[1];
      this.expansions.push(new ExpansionItem(ExpansionContentComponent, new ExpansionData(layout, elementInLayouts)));
    })
  }
}