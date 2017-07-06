export class PageOne {
    
    email: string = "testEmail";
    datasource:any;
    
    constructor(){
        this.datasource = {
            data:[
            {ContactName:'test'},
            {ContactName:'test 111'},
            {ContactName:'test 222'},
            {ContactName:'test 333'},
            {ContactName:'test 444'},
            {ContactName:'test 555'},
            {ContactName:'test 666'},
            ],
            pageSize: 5
        };
    }
    
    
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