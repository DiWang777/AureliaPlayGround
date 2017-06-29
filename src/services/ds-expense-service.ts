import {SearchDsExpenseResult} from "../dtos/search-ds-expense-result";
import {autoinject,} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
import {observable} from "aurelia-binding/dist/aurelia-binding";

/**
 * Created by Alan on 6/28/2017.
 */
@autoinject
export class DsExpenseService{
  constructor(private httpClient: HttpClient){
    var tokenString = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguZGV2ZWxvcG1lbnQubG9jYWwvIiwiYXVkIjoibGVudHVuZSIsIm5iZiI6MTQ5ODY4NjE1MSwiZXhwIjoxNDk4NzcyNTUxLCJjbGllbnRfaWQiOiJsZW50dW5lIiwic2NvcGUiOiJBbGxvd0FsbCIsInN1YiI6ImpiIn0.7qQ6NeOrgnC0qGReAHzKI0cKQxATmXt_Hxzep5Fls48";
    this.httpClient.configure(x=>{
      x.withHeader('Authorization',"Bearer " + tokenString)
    });
  }

  SearchDsExpense(param: any):  Promise<SearchDsExpenseResult[]>{
    return this.httpClient.get('https://dresource.development.local/api/SearchDsExpense?StartDate=&EndDate=&Checked=&Authorised=&Batched=&_=1498619491640')
        .then(response => {
          return response.content as SearchDsExpenseResult[];
        });
  }
}
