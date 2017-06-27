import { Router } from 'aurelia-router';
import { bindable } from 'aurelia-framework';
import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Guid } from './common/guid';

@autoinject()

export class MenuBar {
  subscriberAddMenuItem: any;
  menuItemList: MenuItem[] = null;
  selectedMenuItem: MenuItem;
  navigatingToMenuItem: MenuItem;
  deletingMenuItem: MenuItem;

  routerNavigationSuccessSubscription: any;
  routerNavigationCanceledSubscription: any;

  constructor(private eventAggregator: EventAggregator, private router: Router) {
    this.menuItemList = new Array<MenuItem>();
  }

  created() {
    console.debug("menu-bar:created");
  }

  attached() {
    console.debug("menu-bar:attached");

    this.addMenuItem(false, "Home", "Home", "");

    this.subscriberAddMenuItem = this.eventAggregator.subscribe('AddMenuItem', response => {
      this.addMenuItem(response.canClose, response.title, response.routeName, response.params);
    });
    this.routerNavigationSuccessSubscription = this.eventAggregator.subscribe('router:navigation:success', this.handleRouterNavigationSuccessEvent.bind(this));
    this.routerNavigationCanceledSubscription = this.eventAggregator.subscribe('router:navigation:canceled', this.handleRouterNavigationCanceledEvent.bind(this));
  }

  handleRouterNavigationCanceledEvent(details) {
    console.debug("menu-bar:handleRouterNavigationCanceledEvent");
    this.deletingMenuItem = null;
    this.navigatingToMenuItem = null;
  }

  handleRouterNavigationSuccessEvent(details) {
    console.debug("menu-bar:handleRouterNavigationSuccessEvent");

    // Set active item to the navigating to item as event was sucessful
    if (this.navigatingToMenuItem != null) {
      this.selectedMenuItem = this.navigatingToMenuItem;
      this.navigatingToMenuItem = null;
    }

    // Second check if delete item is required and move from list
    if (this.deletingMenuItem != null) {
      this.spliceMenuItemFromMenuItemList(this.deletingMenuItem);
      this.deletingMenuItem = null;
    }

    this.setActiveStatusOnMenuItems();
  }

  setActiveStatusOnMenuItems() {
    for (var i = this.menuItemList.length - 1; i >= 0; i--) {
      if (this.menuItemList[i].id === this.selectedMenuItem.id)
        this.menuItemList[i].selected = true;
      else
        this.menuItemList[i].selected = false;
    }
  }

  detached() {
    console.debug("menu-bar:detached");
    this.subscriberAddMenuItem.dispose();
    this.routerNavigationSuccessSubscription.dispose();
  }

  addMenuItem(canClose: boolean, title: string, routeName: string, params: any) {
    console.debug("menu-bar:AddMenuItem");

    // have to check the same item is not there already
    var item = new MenuItem();
    item.id = Guid.newGuid();
    item.canClose = canClose;
    item.title = title;
    item.routeName = routeName;
    item.params = params;
    item.internalHashKey = this.getInternalHashKey(item);

    for (var i = this.menuItemList.length - 1; i >= 0; i--) {
      if (this.menuItemList[i].internalHashKey === item.internalHashKey) {
         this.selectMenuItem(this.menuItemList[i]);
        return;
      }
    }
    // not found so push...
    this.menuItemList.push(item);
    // now assume we want to go to it
    this.selectMenuItem(item);
  }

  getInternalHashKey(item: MenuItem){
    var result = item.routeName+":"+JSON.stringify(item.params);
    return result;
  }

  spliceMenuItemFromMenuItemList(menuItem: MenuItem){
    for (var i = this.menuItemList.length - 1; i >= 0; i--) {
      if (this.menuItemList[i].id === menuItem.id) {
        this.menuItemList.splice(i, 1);
        break;
      }
    }
  }

  selectMenuItem(menuItem: MenuItem) {
    console.debug("menu-bar:SelectMenuItem");
    this.navigatingToMenuItem = menuItem;
    var result = this.router.navigateToRoute(menuItem.routeName, menuItem.params);
    console.debug("menu-bar:SelectMenuItem " + result.toString());
  }

  removeMenuItem(menuItem: MenuItem) {
    console.debug("menu-bar:RemoveMenuItem");
    // this just marks the menu as deleted and 
    for (var i = this.menuItemList.length - 1; i >= 0; i--) {
      if (this.menuItemList[i].id === menuItem.id) {
        this.deletingMenuItem = menuItem;
        // if item to delete is the selected item need to move off to another tab to check can dispose.
        if(this.selectedMenuItem != null && this.deletingMenuItem.id !== this.selectedMenuItem.id){
          this.spliceMenuItemFromMenuItemList(this.deletingMenuItem);
        } else {
          // use router selected complete to change menu.
          if (this.menuItemList.length-1 > i) {
            this.navigatingToMenuItem = this.menuItemList[i+1];
          } else if (i>0) {
            this.navigatingToMenuItem = this.menuItemList[i-1];
          }
          this.router.navigateToRoute(this.navigatingToMenuItem.routeName, this.navigatingToMenuItem.params);
        }
        // DID FIND ITEM TO DELETE SO can break out of for loop
        break;
      }
    }
  }
}

export class MenuItem {
  id: string;
  canClose: boolean;
  title: string;
  routeName: string;
  params: any;
  selected: boolean;
  internalHashKey: string;
}

