import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { MenuItem } from './common/menu-item';

@autoinject()

export class SearchWindow {
    email: string = "";

    constructor(private eventAggregator: EventAggregator) {
        console.debug("SearchWindow constructor");
        this.email = "SearchWindow ADDRESS";
    }
    created() {
        console.debug("SearchWindow created");
    }

    activate(context) {
      this.email = context.id + ' ' + context.other;
    }

    bind(bindingContext: Object, overrideContext: Object) {
        console.debug("SearchWindow bind " + bindingContext.toString());
    }

    attached() {
        console.debug("SearchWindow attached");
    }

    detached() {
        console.debug("SearchWindow detached");
    }
    unbind() {
        console.debug("SearchWindow unbind");
    }

    canDeactivate(){
         console.debug("SearchWindow canDeactivate");
         return true;
         // if (confirm("Want to move?")) return true;
         // return false;
    }

CreatePageFourMenu() {
    var menuItem: MenuItem = new MenuItem();
    menuItem.canClose = true;
    menuItem.title = "PageFour";
    menuItem.routeName = "page-four";
    this.eventAggregator.publish('AddMenuItem', menuItem);
  }
 



}