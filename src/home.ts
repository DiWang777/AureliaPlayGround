import { inject, singleton } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
//im por t { AddMainMenuEvent } from './add-main-menu-event';

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
    // var menuItem: MenuItem  = new AddMainMenuEvent();
    // menuItem.title = "PageOne-autoOpen";
    // menuItem.routeName = "page-one";
    // menuItem.params = {id: this.count++ };
    // menuItem.autoOpen = true;
    this.eventAggregator.publish('AddMenuItem', { canClose: true, title: "PageOne-autoOpen", routeName: "page-one", params: {id: this.count++ }, autoOpen: true });
    //this.eventAggregator.publish(menuItem);
  }
 
  CreatePageTwoMenu() {
     this.eventAggregator.publish('AddMenuItem', { canClose: true, title: "PageTwo-NoAutoOpen", routeName: "page-two", params: {id: this.count++, other: "OTHER" }, autoOpen: false });
    // var menuItem: MenuItem = new MenuItem();
    // menuItem.canClose = true;
    // menuItem.title = "PageTwo-noAuto";
    // menuItem.routeName = "page-two";
    // menuItem.params = {id: this.count++, other: "fff" };
    // menuItem.autoOpen = false;
    // this.eventAggregator.publish('AddMenuItem', menuItem);
  }

  CreateSearchWindow() {
    // var menuItem: MenuItem = new MenuItem();
    // menuItem.canClose = true;
    // menuItem.title = "Sample SearchWindow";
    // menuItem.routeName = "search-window";
    // menuItem.params = {id: "Fixed", other: "fff" };
    // this.eventAggregator.publish('AddMenuItem', menuItem);
  }

}
