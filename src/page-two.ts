export class PageTwo {
    email: string = "";

    constructor() {
        console.debug("PageTwo constructor");
        this.email = "PAGE TWO EMAIL ADDRESS";
    }
    created() {
        console.debug("PageTwo created");
    }

    activate(context) {
      this.email = context.id + ' ' + context.other;
    }

    bind(bindingContext: Object, overrideContext: Object) {
        console.debug("PageTwo bind " + bindingContext.toString());
    }

    attached() {
        console.debug("PageTwo attached");
    }

    detached() {
        console.debug("PageTwo detached");
    }
    unbind() {
        console.debug("PageTwo unbind");
    }

    canDeactivate(){
         console.debug("PageTwo canDeactivate");
         return true;
        //  if (confirm("Want to move?")) return true;
        //  return false;
    }





}