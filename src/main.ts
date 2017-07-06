import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import * as $ from 'jquery';
import 'kendo/js/kendo.grid';


export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-kendoui-bridge')
    .feature('resources');
    

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
