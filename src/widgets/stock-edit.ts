import {DialogController} from 'aurelia-dialog';
import {SearchStockResult} from "../dtos/search-stock-result";

export class EditStock{
  static inject = [DialogController];
  stock: SearchStockResult = null;
  editingStock: SearchStockResult= null
  controller;
  constructor(controller){
    this.controller = controller;
  }
  activate(stock){
    this.editingStock = Object.assign({}, stock);
    this.stock = stock;
  }
}
