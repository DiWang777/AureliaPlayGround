
import {DialogService} from "aurelia-dialog";
import {EditExpense} from "./expense-edit";
import {SearchDsExpenseResult} from "../dtos/search-ds-expense-result";
import {CommonService} from "../services/common-service";
import {autoinject} from "aurelia-framework";
import 'colresizable';
import * as $ from 'jquery';

@autoinject()
export class Grid {
  autoClose = 'disabled';
  objectList = [];


  currentSort = {filedName: null, sortOrder: null};

  constructor(private commonService: CommonService, private dialogService: DialogService, private element: Element) {
  }
  activate(model) {
    this.objectList = model.source;
    $.each(this.objectList, function(index, val){
      val.Uid = index;
    })
  }

  attached(){
    var fixedHeader = $(this.element).find("#headerFixed");
    fixedHeader.hide();
    $(this.element).find('table').hover(function() {
      $(this.element).find('table').colResizable();
    });

    $(this.element).find(".table-wrapper").bind("scroll", function() {
      var offset = $(this).scrollTop();
      if (offset >= 5 && fixedHeader.is(":hidden")) {
        var currentHeader = $("#dataTable > thead").clone();
        fixedHeader.append(currentHeader);
        fixedHeader.width($("#dataTable").width());
        fixedHeader.show();
      }
      else if (offset < 5) {
        fixedHeader.hide();
        fixedHeader.html("");
      }
    });
  }



  edit(event, expense){
    this.dialogService.open({ viewModel: EditExpense, model: expense, lock: false }).whenClosed(response => {
      if (!response.wasCancelled) {
        Object.assign(expense, response.output);
      } else {
      }
    });
  }
  sortGrid(fieldName){
    if(this.currentSort == null){
        this.currentSort = {filedName: fieldName, sortOrder: "asc"};
    }else{
      if(fieldName == this.currentSort.filedName){
        if(this.currentSort.sortOrder == "asc"){
          this.currentSort = {filedName: fieldName, sortOrder: "desc"};
        }else{
          this.currentSort = {filedName: "Uid", sortOrder: "asc"};
        }
      }else{
        this.currentSort = {filedName: fieldName, sortOrder: "asc"};
      }
    }
    this.commonService.sortArray(this.objectList, this.currentSort.filedName, this.currentSort.sortOrder);
  }
}
