import { Component, Input, OnInit } from '@angular/core';
import { ElementBase } from '../element/element-base';
import { ElementLayout } from '../element/element-layout';
import { TabContentComponent } from './tab-content.component';
import { TabData } from './tab-data';
import { TabItem } from './tab-item';

@Component({
  selector: 'app-dynamic-tab',
  templateUrl: './dynamic-tab.component.html',
  styleUrls: ['./dynamic-tab.component.css']
})
export class DynamicTabComponent implements OnInit {
  @Input() layouts: [ElementLayout, Map<string, ElementBase<any>[]>][];

  tabs: TabItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.layouts.forEach(el => {
      let layout: ElementLayout = el[0];
      let elementInLayouts: Map<string, ElementBase<any>[]> = el[1];
      this.tabs.push(new TabItem(TabContentComponent, new TabData(layout, elementInLayouts)));
    })
  }

}
