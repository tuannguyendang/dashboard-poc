import { Component, Input, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { TabData } from './tab-data';
import { TabComponent } from './tab.component';


@Component({
  template: `
    <ng-container *ngIf="(asyncTabs | async) === null">
    Loading tabs...
  </ng-container>
  
  <mat-tab-group>
    <mat-tab *ngFor="let tab of asyncTabs | async">
      <ng-template mat-tab-label>{{tab.label.layouttype}}</ng-template>
      <app-dynamic-form [elements]="tab.content"></app-dynamic-form>
    </mat-tab>
  </mat-tab-group>
  `
})
export class TabContentComponent implements OnInit, TabComponent {
  @Input() data: TabData[];

  asyncTabs: Observable<TabData[]>;

  constructor() {

  }

  ngOnInit() {
    this.asyncTabs = new Observable((observer: Observer<TabData[]>) => {
      setTimeout(() => {
        observer.next(
          this.data
        );
      }, 1000);
    });
  }

}