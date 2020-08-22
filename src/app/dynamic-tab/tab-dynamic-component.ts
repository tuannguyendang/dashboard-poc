import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdComponent } from './ad.component';
import { TabData } from './tab-data';
import { TabItem } from './tab-item';
import { TabDirective } from './tab.directive';


@Component({
    selector: 'app-dy-tab',
    template: `
              <div class="ad-banner-example">
                <h3>Tabs Dynamic</h3>
                <ng-template tabDirective></ng-template>
              </div>
            `
})
export class TabDynamicComponent implements OnInit, OnDestroy {
    @Input() tabs: TabItem[];
    currentAdIndex = -1;
    @ViewChild(TabDirective, { static: true }) tabDirective: TabDirective;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.loadComponent();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.tabs.length;
        const tabItem = this.tabs[this.currentAdIndex];
        let datas: TabData[] = [];

        this.tabs.forEach(tab => {
            datas.push(tab.data);
        })
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tabItem.component);

        const viewContainerRef = this.tabDirective.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
        componentRef.instance.data = datas;
    }

}