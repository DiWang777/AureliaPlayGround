export class PageOne {

    email: string = "testEmail";



  created() {
      console.debug("PageOne created");
  }

  activate(context) {
      this.email = context.id;
  }

  attached() {
      console.debug("PageOne attached");
  }

  detached() {
      console.debug("PageOne detached");
  }


}