import { MenuItem } from './menu-bar'
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Home {
  eventAggregator: EventAggregator;
  message: string = "ThisIsAMessage";

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  CreatePageOneMenu() {
    var menuItem: MenuItem = new MenuItem();
    menuItem.CanClose = true;
    menuItem.Title = "PageOneFromPublish";
    menuItem.RouteName = "page-one";
    this.eventAggregator.publish('AddMenuItem', menuItem);
  }

  CreatePageTwoMenu() {
    var menuItem: MenuItem = new MenuItem();
    menuItem.CanClose = true;
    menuItem.Title = "PageTwo";
    menuItem.RouteName = "page-two";
    this.eventAggregator.publish('AddMenuItem', menuItem);
  }
}