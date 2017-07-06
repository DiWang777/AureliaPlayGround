import { autoinject, customElement, bindable, bindingMode } from "aurelia-framework";
import * as $ from 'jquery';
import 'select2';

@autoinject
export class Select2D {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) name:string = 'select';
    @bindable({ defaultBindingMode: bindingMode.twoWay }) labelproperty: string = 'label';
    @bindable({ defaultBindingMode: bindingMode.twoWay }) valueproperty: string = 'value';
    @bindable({ defaultBindingMode: bindingMode.twoWay }) multiselect: string = "false";

    @bindable({ defaultBindingMode: bindingMode.twoWay }) options: any[] = []; 
    // @bindable({ defaultBindingMode: bindingMode.twoWay, changeHandler: 'selectedIsChanged' }) selected: any = null; 

    select2 = null;
    constructor(private element: Element) {
    }
    


    attached() {

        //Create the select2 dropdown
        this.select2 = $(this.element).find('select').select2({
            placeholder: "No selection"
        }); 

       
    };
 
    detached() {
        this.select2.select2('destroy');
    }
}