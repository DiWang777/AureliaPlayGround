import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  message = 'This is App page';
  autoClose = 'disabled';

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Lentune';
    config.map([
      {route: '', name: 'Home', moduleId: 'screens/home/home', title: 'Home'},
    ]);

    this.router = router;
  }




}
