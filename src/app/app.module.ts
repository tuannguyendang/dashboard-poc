import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormJsonComponent } from './dynamic-form-json/dynamic-form-json.component';
import { DynamicFormNumberComponent } from './dynamic-form-number/dynamic-form-number.component';
import { DynamicDashboardComponent } from './dynamic-dashboard/dynamic-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    DynamicFormJsonComponent,
    DynamicFormNumberComponent,
    DynamicDashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }