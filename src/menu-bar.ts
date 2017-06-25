import { bindable } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Guid } from './common/guid';


@inject(EventAggregator)
export class MenuBar {

  eventAggregator: EventAggregator;
  subscriberAddMenuItem: any;
//@bindable
  menuItemList: MenuItem[] = null;

  constructor(EventAggregator) {
    this.eventAggregator = EventAggregator;
    this.menuItemList = new Array<MenuItem>();
    var item = new MenuItem();
    item.Id = Guid.newGuid();
    item.CanClose = false;
    item.Title = "Home";
    item.RouteName = "Home";
    this.menuItemList.push(item);
  }
  
  created() {
     var item = new MenuItem();
    item.Id = Guid.newGuid();
    item.CanClose = true;
    item.Title = "PageOne";
    item.RouteName = "page-one";
    this.menuItemList.push(item);
  }

  attached() {
    this.subscriberAddMenuItem = this.eventAggregator.subscribe('AddMenuItem', response => {
      this.AddMenuItem(response.CanClose, response.Title, response.RouteName);
    });
  }

  detached() {
    this.subscriberAddMenuItem.dispose();
  }

  AddMenuItem(CanClose: boolean, Title: string, RouteName: string) {
    var item = new MenuItem();
    item.Id = Guid.newGuid();
    item.CanClose = CanClose;
    item.Title = Title;
    item.RouteName = RouteName;
    this.menuItemList.push(item);
  }

  RemoveMenuItem(menuItem: MenuItem) {
    for (var i = this.menuItemList.length - 1; i >= 0; i--) {
      if (this.menuItemList[i].Id === menuItem.Id) {
        this.menuItemList.splice(i, 1);
        break;
      }
    }
    i = i-1;
    if (i>=0 && i < this.menuItemList.length){
      // this is the item we want to have focus 
      // and now set this to the route
    }
  }
}

export class MenuItem {
  Id: string;
  CanClose: boolean;
  Title: string;
  RouteName: string;
  Tip: string;
}

