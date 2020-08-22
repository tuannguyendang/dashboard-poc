import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ExpansionItem } from './expansion-item';
import { ExpansionDirective } from './expansion.directive';
import { ExpansionData } from './expansion-data';
import { ExpansionComponent } from './expansion.component';


@Component({
    selector: 'app-dy-expansion',
    template: `
              <div>
                <h3>Expansions Dynamic</h3>
                <ng-template expansionDirective></ng-template>
              </div>
            `
})
export class ExpansionDynamicComponent implements OnInit, OnDestroy {
    @Input() expansions: ExpansionItem[];
    currentAdIndex = -1;
    @ViewChild(ExpansionDirective, { static: true }) expansionDirective: ExpansionDirective;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.loadComponent();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.expansions.length;
        const tabItem = this.expansions[this.currentAdIndex];
        let datas: ExpansionData[] = [];

        this.expansions.forEach(tab => {
            datas.push(tab.data);
        })
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tabItem.component);

        const viewContainerRef = this.expansionDirective.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent<ExpansionComponent>(componentFactory);
        componentRef.instance.data = datas;
    }

}