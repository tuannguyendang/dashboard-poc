import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ExpansionData } from './expansion-data';
import { ExpansionComponent } from './expansion.component';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  template: `
    <ng-container *ngIf="(asyncTabs | async) === null">
    Loading tabs...
  </ng-container>
  
  <div class="example-action-buttons">
    <button mat-button (click)="accordion.openAll()">Expand All</button>
    <button mat-button (click)="accordion.closeAll()">Collapse All</button>
  </div>
  <mat-accordion class="example-headers-align" multi>
    <mat-expansion-panel *ngFor="let tab of asyncTabs | async">
      <mat-expansion-panel-header>
        <mat-panel-title>
          {{tab.label.layouttype}}
        </mat-panel-title>
        <mat-panel-description>
          {{tab.label.layouttype}}
          <mat-icon>account_circle</mat-icon>
        </mat-panel-description>
      </mat-expansion-panel-header>
  
      <app-dynamic-form [elements]="tab.content"></app-dynamic-form>
      </mat-expansion-panel>
  </mat-accordion>
  `
})
export class ExpansionContentComponent implements OnInit, ExpansionComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() data: ExpansionData[];

  asyncTabs: Observable<ExpansionData[]>;

  constructor() {

  }

  ngOnInit() {
    this.asyncTabs = new Observable((observer: Observer<ExpansionData[]>) => {
      setTimeout(() => {
        observer.next(
          this.data
        );
      }, 1000);
    });
  }

}