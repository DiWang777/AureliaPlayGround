import { MenuItem } from './menu-bar'
import { inject, singleton } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
@singleton()
export class Home {
  eventAggregator: EventAggregator;
  message: string = "ThisIsAMessage";
  count: number = 12;

  constructor(eventAggregator) {
    console.debug("home.constructor");
    this.eventAggregator = eventAggregator;
  }

  CreatePageOneMenu() {
    var menuItem: MenuItem = new MenuItem();
    menuItem.canClose = true;
    menuItem.title = "PageOne";
    menuItem.routeName = "page-one";
    menuItem.params = {id: this.count++ };
    this.eventAggregator.publish('AddMenuItem', menuItem);
  }
 
  CreatePageTwoMenu() {
    var menuItem: MenuItem = new MenuItem();
    menuItem.canClose = true;
    menuItem.title = "PageTwo";
    menuItem.routeName = "page-two";
    menuItem.params = {id: this.count++, other: "fff" };
    this.eventAggregator.publish('AddMenuItem', menuItem);
  }


  CreateSearchWindow() {
    var menuItem: MenuItem = new MenuItem();
    menuItem.canClose = true;
    menuItem.title = "Sample SearchWindow";
    menuItem.routeName = "search-window";
    menuItem.params = {id: "Fixed", other: "fff" };
    
    this.eventAggregator.publish('AddMenuItem', menuItem);
  }

}