import { Component } from '@angular/core';
import { QuestionService } from './service/question.service';
import { Observable } from 'rxjs';
import { QuestionBase } from './service/question-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [QuestionService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-poc';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}