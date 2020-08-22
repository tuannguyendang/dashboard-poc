import { Component, Input, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ElementBase } from '../element/element-base';
import { ElementLayout } from '../element/element-layout';
import { TabData } from './tab-data';
import { TabComponent } from './tab.component';


export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  template: `
    <ng-container *ngIf="(asyncTabs | async) === null">
    Loading tabs...
  </ng-container>
  
  <mat-tab-group>
    <mat-tab *ngFor="let tab of asyncTabs | async">
      <ng-template mat-tab-label>{{tab.label}}</ng-template>
      <app-dynamic-form [elements]="tab.content"></app-dynamic-form>
    </mat-tab>
  </mat-tab-group>
  `
})
export class TabContentComponent implements OnInit, TabComponent {
  @Input() data: TabData[];

  asyncTabs: Observable<ExampleTab[]>;

  constructor() {

  }

  ngOnInit() {
    let tabDatas = [];
    this.data.forEach(el => {
      let layout: ElementLayout = el.label;
      let elementInLayouts: Map<string, ElementBase<any>[]> = el.content;
      tabDatas.push({ label: layout.layouttype, content: elementInLayouts })
    });
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next(
          tabDatas
        );
      }, 1000);
    });
  }

}