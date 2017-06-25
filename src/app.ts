import {Router, RouterConfiguration} from 'aurelia-router';
import {MenuItem} from './menu-bar';
import {Guid} from './common/guid';

export class App {
  router: Router;
  menuItemList: MenuItem[] = null;
  counter: number = 1;

  constructor() {
  }

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Lentune';
    config.map([
      { route: '',      name:'Home',                  moduleId: 'home',     title:'Home'},
      { route: 'xxx',  name:'page-one',   moduleId: 'page-one', title:'Page One'},
      { route: 'yyy',  name:'page-two',   moduleId: 'page-two', title:'Page Two'},

    ]);

    this.router = router;
  }

}