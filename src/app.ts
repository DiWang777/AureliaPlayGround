import {Router, RouterConfiguration} from 'aurelia-router';
import {MenuItem} from './menu-bar';
import {Guid} from './common/guid';

export class App {
  router: Router;
  menuItemList: MenuItem[] = null;

  constructor() {
  }

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Lentune';
    config.map([
      { route: '',          name:'Home',        moduleId: 'home',     title:'Home'},
      { route: 'xxx/:id',   name:'page-one',    moduleId: 'page-one', title:'Page One'},
      { route: 'yyy/:id/:other',   name:'page-two',    moduleId: 'page-two', title:'Page Two'},
      { route: 'zzz/:id/:other',   name:'search-window',    moduleId: 'search-window', title:'Search Window'},

    ]);
    this.router = router;
  }

}