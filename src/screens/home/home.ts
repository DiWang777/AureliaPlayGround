import {autoinject} from "aurelia-framework";
import {DsExpenseService} from "../../services/ds-expense-service";
import {SearchDsExpenseResult} from "../../dtos/search-ds-expense-result";

@autoinject
export class Home {
  gridDataSource: SearchDsExpenseResult[];

  constructor(private dsExpenseService: DsExpenseService) {
    //  this.dsExpenseService.SearchDsExpense({}).then(response=>{
    //    this.gridDataSource = response;
    //  });
  }
  testClick(){
    this.gridDataSource.forEach((val, index, array)=>{
      val.Reference = "Hello" + val.Reference;
    })
  }


  // selectOptions = { allowClear: true, placeholder: 'Select' };

  selectOptions = [
    {label: "label1", value: "Val1"},
    {label: "label2", value: "Val2"},
    {label: "label3", value: "Val3"},
    {label: "label4", value: "Val4"},
    ]
  selectedValue: string = '';
  singleSelectValues: string[] = ['a', 'b', 'c'];
  selectedValues: string[] = [];
  multipleSelectValues: string[] = ['z', 'y', 'x'];
  /* Justification: this is a recommended fix for an issue with Select2 and Aurelia integration as documented here
               http://stackoverflow.com/questions/33452623/aurelia-trying-to-load-html-from-select2#answer-34121891 */
  /* tslint:disable-next-line no-empty */
  changeCallback(evt: Event): void {
  }


}
