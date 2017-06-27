export class SearchWindow {
    email: string = "";

    constructor() {
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
         //return true;
          if (confirm("Want to move?")) return true;
          return false;
    }





}