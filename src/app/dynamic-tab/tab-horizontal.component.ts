import { Component, Input } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  template: `
  <div class="tab-banner-example">
      <h4>do something for horizontal tab</h4>
    </div>
  `
})
export class TabHorizontalComponent implements TabComponent {
  @Input() data: any;

}