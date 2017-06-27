import {DialogController} from 'aurelia-dialog';
import {SearchDsExpenseResult} from "../dtos/search-ds-expense-result";

export class EditExpense{
  static inject = [DialogController];
  expense: SearchDsExpenseResult = null;
  editingExpense: SearchDsExpenseResult = null
  controller;
  constructor(controller){
    this.controller = controller;
  }
  activate(expense){
    this.editingExpense = Object.assign({}, expense);
    this.expense = expense;
  }
}
