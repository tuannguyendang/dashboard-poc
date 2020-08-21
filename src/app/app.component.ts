import { Component } from '@angular/core';
import { ElementService } from './service/element.service';
import { Observable } from 'rxjs';
import { ElementBase } from './element/element-base';
import { ElementLayout } from './element/element-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [ElementService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-poc';
  layouts$: Observable<[ElementLayout, Map<string, ElementBase<any>[]>][]>;

  constructor(service: ElementService) {
    this.layouts$ = service.getLayouts();
  }
}