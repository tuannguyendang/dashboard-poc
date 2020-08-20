import { Component } from '@angular/core';
import { ElementService } from './service/element.service';
import { Observable } from 'rxjs';
import { ElementBase } from './element/element-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [ElementService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-poc';
  questions$: Observable<Map<any, ElementBase<any>[]>>;

  constructor(service: ElementService) {
    this.questions$ = service.getQuestions();
  }
}