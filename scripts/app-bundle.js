define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.menuItemList = null;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Lentune';
            config.map([
                { route: '', name: 'Home', moduleId: 'home', title: 'Home' },
                { route: 'xxx/:id', name: 'page-one', moduleId: 'page-one', title: 'Page One' },
                { route: 'yyy/:id/:other', name: 'page-two', moduleId: 'page-two', title: 'Page Two' },
                { route: 'zzz/:id/:other', name: 'search-window', moduleId: 'search-window', title: 'Search Window' },
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUlFO1lBRkEsaUJBQVksR0FBZSxJQUFJLENBQUM7UUFHaEMsQ0FBQztRQUVELDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFXLElBQUksRUFBQyxNQUFNLEVBQVMsUUFBUSxFQUFFLE1BQU0sRUFBTSxLQUFLLEVBQUMsTUFBTSxFQUFDO2dCQUM3RSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUksSUFBSSxFQUFDLFVBQVUsRUFBSyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxVQUFVLEVBQUM7Z0JBQ2pGLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFJLElBQUksRUFBQyxVQUFVLEVBQUssUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFDO2dCQUN4RixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBSSxJQUFJLEVBQUMsZUFBZSxFQUFLLFFBQVEsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLGVBQWUsRUFBQzthQUV4RyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUgsVUFBQztJQUFELENBbkJBLEFBbUJDLElBQUE7SUFuQlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtNZW51SXRlbX0gZnJvbSAnLi9tZW51LWJhcic7XHJcbmltcG9ydCB7R3VpZH0gZnJvbSAnLi9jb21tb24vZ3VpZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICByb3V0ZXI6IFJvdXRlcjtcclxuICBtZW51SXRlbUxpc3Q6IE1lbnVJdGVtW10gPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKXtcclxuICAgIGNvbmZpZy50aXRsZSA9ICdMZW50dW5lJztcclxuICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICB7IHJvdXRlOiAnJywgICAgICAgICAgbmFtZTonSG9tZScsICAgICAgICBtb2R1bGVJZDogJ2hvbWUnLCAgICAgdGl0bGU6J0hvbWUnfSxcclxuICAgICAgeyByb3V0ZTogJ3h4eC86aWQnLCAgIG5hbWU6J3BhZ2Utb25lJywgICAgbW9kdWxlSWQ6ICdwYWdlLW9uZScsIHRpdGxlOidQYWdlIE9uZSd9LFxyXG4gICAgICB7IHJvdXRlOiAneXl5LzppZC86b3RoZXInLCAgIG5hbWU6J3BhZ2UtdHdvJywgICAgbW9kdWxlSWQ6ICdwYWdlLXR3bycsIHRpdGxlOidQYWdlIFR3byd9LFxyXG4gICAgICB7IHJvdXRlOiAnenp6LzppZC86b3RoZXInLCAgIG5hbWU6J3NlYXJjaC13aW5kb3cnLCAgICBtb2R1bGVJZDogJ3NlYXJjaC13aW5kb3cnLCB0aXRsZTonU2VhcmNoIFdpbmRvdyd9LFxyXG5cclxuICAgIF0pO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVidWc6IHRydWUsXHJcbiAgdGVzdGluZzogdHJ1ZVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home',["require", "exports", "./menu-bar", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, menu_bar_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home(eventAggregator) {
            this.message = "ThisIsAMessage";
            this.count = 12;
            console.debug("home.constructor");
            this.eventAggregator = eventAggregator;
        }
        Home.prototype.CreatePageOneMenu = function () {
            var menuItem = new menu_bar_1.MenuItem();
            menuItem.canClose = true;
            menuItem.title = "PageOne";
            menuItem.routeName = "page-one";
            menuItem.params = { id: this.count++ };
            this.eventAggregator.publish('AddMenuItem', menuItem);
        };
        Home.prototype.CreatePageTwoMenu = function () {
            var menuItem = new menu_bar_1.MenuItem();
            menuItem.canClose = true;
            menuItem.title = "PageTwo";
            menuItem.routeName = "page-two";
            menuItem.params = { id: this.count++, other: "fff" };
            this.eventAggregator.publish('AddMenuItem', menuItem);
        };
        Home.prototype.CreateSearchWindow = function () {
            var menuItem = new menu_bar_1.MenuItem();
            menuItem.canClose = true;
            menuItem.title = "Sample SearchWindow";
            menuItem.routeName = "search-window";
            menuItem.params = { id: "Fixed", other: "fff" };
            this.eventAggregator.publish('AddMenuItem', menuItem);
        };
        return Home;
    }());
    Home = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
        aurelia_framework_1.singleton(),
        __metadata("design:paramtypes", [Object])
    ], Home);
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBTUEsSUFBYSxJQUFJO1FBS2YsY0FBWSxlQUFlO1lBSDNCLFlBQU8sR0FBVyxnQkFBZ0IsQ0FBQztZQUNuQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1lBR2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN6QyxDQUFDO1FBRUQsZ0NBQWlCLEdBQWpCO1lBQ0UsSUFBSSxRQUFRLEdBQWEsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDeEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDekIsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDM0IsUUFBUSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7WUFDaEMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVELGdDQUFpQixHQUFqQjtZQUNFLElBQUksUUFBUSxHQUFhLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUdELGlDQUFrQixHQUFsQjtZQUNFLElBQUksUUFBUSxHQUFhLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUM7WUFDdkMsUUFBUSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7WUFDckMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBRS9DLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUgsV0FBQztJQUFELENBdkNBLEFBdUNDLElBQUE7SUF2Q1ksSUFBSTtRQUZoQiwwQkFBTSxDQUFDLDBDQUFlLENBQUM7UUFDdkIsNkJBQVMsRUFBRTs7T0FDQyxJQUFJLENBdUNoQjtJQXZDWSxvQkFBSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuL21lbnUtYmFyJ1xyXG5pbXBvcnQgeyBpbmplY3QsIHNpbmdsZXRvbiB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxyXG5Ac2luZ2xldG9uKClcclxuZXhwb3J0IGNsYXNzIEhvbWUge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIG1lc3NhZ2U6IHN0cmluZyA9IFwiVGhpc0lzQU1lc3NhZ2VcIjtcclxuICBjb3VudDogbnVtYmVyID0gMTI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcImhvbWUuY29uc3RydWN0b3JcIik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuICB9XHJcblxyXG4gIENyZWF0ZVBhZ2VPbmVNZW51KCkge1xyXG4gICAgdmFyIG1lbnVJdGVtOiBNZW51SXRlbSA9IG5ldyBNZW51SXRlbSgpO1xyXG4gICAgbWVudUl0ZW0uY2FuQ2xvc2UgPSB0cnVlO1xyXG4gICAgbWVudUl0ZW0udGl0bGUgPSBcIlBhZ2VPbmVcIjtcclxuICAgIG1lbnVJdGVtLnJvdXRlTmFtZSA9IFwicGFnZS1vbmVcIjtcclxuICAgIG1lbnVJdGVtLnBhcmFtcyA9IHtpZDogdGhpcy5jb3VudCsrIH07XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdBZGRNZW51SXRlbScsIG1lbnVJdGVtKTtcclxuICB9XHJcbiBcclxuICBDcmVhdGVQYWdlVHdvTWVudSgpIHtcclxuICAgIHZhciBtZW51SXRlbTogTWVudUl0ZW0gPSBuZXcgTWVudUl0ZW0oKTtcclxuICAgIG1lbnVJdGVtLmNhbkNsb3NlID0gdHJ1ZTtcclxuICAgIG1lbnVJdGVtLnRpdGxlID0gXCJQYWdlVHdvXCI7XHJcbiAgICBtZW51SXRlbS5yb3V0ZU5hbWUgPSBcInBhZ2UtdHdvXCI7XHJcbiAgICBtZW51SXRlbS5wYXJhbXMgPSB7aWQ6IHRoaXMuY291bnQrKywgb3RoZXI6IFwiZmZmXCIgfTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ0FkZE1lbnVJdGVtJywgbWVudUl0ZW0pO1xyXG4gIH1cclxuXHJcblxyXG4gIENyZWF0ZVNlYXJjaFdpbmRvdygpIHtcclxuICAgIHZhciBtZW51SXRlbTogTWVudUl0ZW0gPSBuZXcgTWVudUl0ZW0oKTtcclxuICAgIG1lbnVJdGVtLmNhbkNsb3NlID0gdHJ1ZTtcclxuICAgIG1lbnVJdGVtLnRpdGxlID0gXCJTYW1wbGUgU2VhcmNoV2luZG93XCI7XHJcbiAgICBtZW51SXRlbS5yb3V0ZU5hbWUgPSBcInNlYXJjaC13aW5kb3dcIjtcclxuICAgIG1lbnVJdGVtLnBhcmFtcyA9IHtpZDogXCJGaXhlZFwiLCBvdGhlcjogXCJmZmZcIiB9O1xyXG4gICAgXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdBZGRNZW51SXRlbScsIG1lbnVJdGVtKTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXHJcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xyXG4gIGF1cmVsaWEudXNlXHJcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcclxuXHJcbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XHJcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcclxuICB9XHJcblxyXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XHJcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtdGVzdGluZycpO1xyXG4gIH1cclxuXHJcbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('menu-bar',["require", "exports", "aurelia-router", "aurelia-framework", "aurelia-event-aggregator", "./common/guid"], function (require, exports, aurelia_router_1, aurelia_framework_1, aurelia_event_aggregator_1, guid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MenuBar = (function () {
        function MenuBar(eventAggregator, router) {
            this.eventAggregator = eventAggregator;
            this.router = router;
            this.currentCss = "list-group-item active";
            this.menuItemList = null;
            this.menuItemList = new Array();
        }
        MenuBar.prototype.created = function () {
            console.debug("menu-bar:created");
        };
        MenuBar.prototype.attached = function () {
            var _this = this;
            console.debug("menu-bar:attached");
            this.addMenuItem(false, "Home", "Home", "");
            this.subscriberAddMenuItem = this.eventAggregator.subscribe('AddMenuItem', function (response) {
                _this.addMenuItem(response.canClose, response.title, response.routeName, response.params);
            });
            this.routerNavigationSuccessSubscription = this.eventAggregator.subscribe('router:navigation:success', this.handleRouterNavigationSuccessEvent.bind(this));
            this.routerNavigationCanceledSubscription = this.eventAggregator.subscribe('router:navigation:canceled', this.handleRouterNavigationCanceledEvent.bind(this));
        };
        MenuBar.prototype.handleRouterNavigationCanceledEvent = function (details) {
            console.debug("menu-bar:handleRouterNavigationCanceledEvent");
            this.deletingMenuItem = null;
            this.navigatingToMenuItem = null;
        };
        MenuBar.prototype.handleRouterNavigationSuccessEvent = function (details) {
            console.debug("menu-bar:handleRouterNavigationSuccessEvent");
            if (this.navigatingToMenuItem != null) {
                this.selectedMenuItem = this.navigatingToMenuItem;
                this.navigatingToMenuItem = null;
            }
            if (this.deletingMenuItem != null) {
                this.spliceMenuItemFromMenuItemList(this.deletingMenuItem);
                this.deletingMenuItem = null;
            }
            this.setActiveStatusOnMenuItems();
        };
        MenuBar.prototype.setActiveStatusOnMenuItems = function () {
            for (var i = this.menuItemList.length - 1; i >= 0; i--) {
                if (this.menuItemList[i].id === this.selectedMenuItem.id)
                    this.menuItemList[i].selected = true;
                else
                    this.menuItemList[i].selected = false;
            }
        };
        MenuBar.prototype.detached = function () {
            console.debug("menu-bar:detached");
            this.subscriberAddMenuItem.dispose();
            this.routerNavigationSuccessSubscription.dispose();
        };
        MenuBar.prototype.addMenuItem = function (canClose, title, routeName, params) {
            console.debug("menu-bar:AddMenuItem");
            var item = new MenuItem();
            item.id = guid_1.Guid.newGuid();
            item.canClose = canClose;
            item.title = title;
            item.routeName = routeName;
            item.params = params;
            item.internalHashKey = this.getInternalHashKey(item);
            for (var i = this.menuItemList.length - 1; i >= 0; i--) {
                if (this.menuItemList[i].internalHashKey === item.internalHashKey) {
                    this.selectMenuItem(this.menuItemList[i]);
                    return;
                }
            }
            this.menuItemList.push(item);
            this.selectMenuItem(item);
        };
        MenuBar.prototype.getInternalHashKey = function (item) {
            var result = item.routeName + ":" + JSON.stringify(item.params);
            return result;
        };
        MenuBar.prototype.spliceMenuItemFromMenuItemList = function (menuItem) {
            for (var i = this.menuItemList.length - 1; i >= 0; i--) {
                if (this.menuItemList[i].id === menuItem.id) {
                    this.menuItemList.splice(i, 1);
                    break;
                }
            }
        };
        MenuBar.prototype.selectMenuItem = function (menuItem) {
            console.debug("menu-bar:SelectMenuItem");
            this.navigatingToMenuItem = menuItem;
            var result = this.router.navigateToRoute(menuItem.routeName, menuItem.params);
            console.debug("menu-bar:SelectMenuItem " + result.toString());
        };
        MenuBar.prototype.removeMenuItem = function (menuItem) {
            console.debug("menu-bar:RemoveMenuItem");
            for (var i = this.menuItemList.length - 1; i >= 0; i--) {
                if (this.menuItemList[i].id === menuItem.id) {
                    this.deletingMenuItem = menuItem;
                    if (this.selectedMenuItem != null && this.deletingMenuItem.id !== this.selectedMenuItem.id) {
                        this.spliceMenuItemFromMenuItemList(this.deletingMenuItem);
                    }
                    else {
                        if (this.menuItemList.length - 1 > i) {
                            this.navigatingToMenuItem = this.menuItemList[i + 1];
                        }
                        else if (i > 0) {
                            this.navigatingToMenuItem = this.menuItemList[i - 1];
                        }
                        this.router.navigateToRoute(this.navigatingToMenuItem.routeName, this.navigatingToMenuItem.params);
                    }
                    break;
                }
            }
        };
        return MenuBar;
    }());
    MenuBar = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router])
    ], MenuBar);
    exports.MenuBar = MenuBar;
    var MenuItem = (function () {
        function MenuItem() {
        }
        return MenuItem;
    }());
    exports.MenuItem = MenuItem;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyRCxDQUFDO3dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNyRyxDQUFDO29CQUVELEtBQUssQ0FBQztnQkFDUixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDSCxjQUFDO0lBQUQsQ0EzSUEsQUEySUMsSUFBQTtJQTNJWSxPQUFPO1FBRm5CLDhCQUFVLEVBQUU7eUNBYzBCLDBDQUFlLEVBQWtCLHVCQUFNO09BWmpFLE9BQU8sQ0EySW5CO0lBM0lZLDBCQUFPO0lBNklwQjtRQUFBO1FBUUEsQ0FBQztRQUFELGVBQUM7SUFBRCxDQVJBLEFBUUMsSUFBQTtJQVJZLDRCQUFRIiwiZmlsZSI6Im1lbnUtYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4vY29tbW9uL2d1aWQnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVCYXIge1xyXG4gIGN1cnJlbnRDc3MgPSBcImxpc3QtZ3JvdXAtaXRlbSBhY3RpdmVcIjtcclxuIFxyXG4gIHN1YnNjcmliZXJBZGRNZW51SXRlbTogYW55O1xyXG4gIG1lbnVJdGVtTGlzdDogTWVudUl0ZW1bXSA9IG51bGw7XHJcbiAgc2VsZWN0ZWRNZW51SXRlbTogTWVudUl0ZW07XHJcbiAgbmF2aWdhdGluZ1RvTWVudUl0ZW06IE1lbnVJdGVtO1xyXG4gIGRlbGV0aW5nTWVudUl0ZW06IE1lbnVJdGVtO1xyXG5cclxuICByb3V0ZXJOYXZpZ2F0aW9uU3VjY2Vzc1N1YnNjcmlwdGlvbjogYW55O1xyXG4gIHJvdXRlck5hdmlnYXRpb25DYW5jZWxlZFN1YnNjcmlwdGlvbjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLm1lbnVJdGVtTGlzdCA9IG5ldyBBcnJheTxNZW51SXRlbT4oKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKFwibWVudS1iYXI6Y3JlYXRlZFwiKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcIm1lbnUtYmFyOmF0dGFjaGVkXCIpO1xyXG5cclxuICAgIHRoaXMuYWRkTWVudUl0ZW0oZmFsc2UsIFwiSG9tZVwiLCBcIkhvbWVcIiwgXCJcIik7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpYmVyQWRkTWVudUl0ZW0gPSB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ0FkZE1lbnVJdGVtJywgcmVzcG9uc2UgPT4ge1xyXG4gICAgICB0aGlzLmFkZE1lbnVJdGVtKHJlc3BvbnNlLmNhbkNsb3NlLCByZXNwb25zZS50aXRsZSwgcmVzcG9uc2Uucm91dGVOYW1lLCByZXNwb25zZS5wYXJhbXMpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJvdXRlck5hdmlnYXRpb25TdWNjZXNzU3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCdyb3V0ZXI6bmF2aWdhdGlvbjpzdWNjZXNzJywgdGhpcy5oYW5kbGVSb3V0ZXJOYXZpZ2F0aW9uU3VjY2Vzc0V2ZW50LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5yb3V0ZXJOYXZpZ2F0aW9uQ2FuY2VsZWRTdWJzY3JpcHRpb24gPSB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ3JvdXRlcjpuYXZpZ2F0aW9uOmNhbmNlbGVkJywgdGhpcy5oYW5kbGVSb3V0ZXJOYXZpZ2F0aW9uQ2FuY2VsZWRFdmVudC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJvdXRlck5hdmlnYXRpb25DYW5jZWxlZEV2ZW50KGRldGFpbHMpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJtZW51LWJhcjpoYW5kbGVSb3V0ZXJOYXZpZ2F0aW9uQ2FuY2VsZWRFdmVudFwiKTtcclxuICAgIHRoaXMuZGVsZXRpbmdNZW51SXRlbSA9IG51bGw7XHJcbiAgICB0aGlzLm5hdmlnYXRpbmdUb01lbnVJdGVtID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJvdXRlck5hdmlnYXRpb25TdWNjZXNzRXZlbnQoZGV0YWlscykge1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcIm1lbnUtYmFyOmhhbmRsZVJvdXRlck5hdmlnYXRpb25TdWNjZXNzRXZlbnRcIik7XHJcblxyXG4gICAgLy8gU2V0IGFjdGl2ZSBpdGVtIHRvIHRoZSBuYXZpZ2F0aW5nIHRvIGl0ZW0gYXMgZXZlbnQgd2FzIHN1Y2Vzc2Z1bFxyXG4gICAgaWYgKHRoaXMubmF2aWdhdGluZ1RvTWVudUl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTWVudUl0ZW0gPSB0aGlzLm5hdmlnYXRpbmdUb01lbnVJdGVtO1xyXG4gICAgICB0aGlzLm5hdmlnYXRpbmdUb01lbnVJdGVtID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZWNvbmQgY2hlY2sgaWYgZGVsZXRlIGl0ZW0gaXMgcmVxdWlyZWQgYW5kIG1vdmUgZnJvbSBsaXN0XHJcbiAgICBpZiAodGhpcy5kZWxldGluZ01lbnVJdGVtICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5zcGxpY2VNZW51SXRlbUZyb21NZW51SXRlbUxpc3QodGhpcy5kZWxldGluZ01lbnVJdGVtKTtcclxuICAgICAgdGhpcy5kZWxldGluZ01lbnVJdGVtID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldEFjdGl2ZVN0YXR1c09uTWVudUl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmVTdGF0dXNPbk1lbnVJdGVtcygpIHtcclxuICAgIGZvciAodmFyIGkgPSB0aGlzLm1lbnVJdGVtTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAodGhpcy5tZW51SXRlbUxpc3RbaV0uaWQgPT09IHRoaXMuc2VsZWN0ZWRNZW51SXRlbS5pZClcclxuICAgICAgICB0aGlzLm1lbnVJdGVtTGlzdFtpXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLm1lbnVJdGVtTGlzdFtpXS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGV0YWNoZWQoKSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKFwibWVudS1iYXI6ZGV0YWNoZWRcIik7XHJcbiAgICB0aGlzLnN1YnNjcmliZXJBZGRNZW51SXRlbS5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLnJvdXRlck5hdmlnYXRpb25TdWNjZXNzU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIGFkZE1lbnVJdGVtKGNhbkNsb3NlOiBib29sZWFuLCB0aXRsZTogc3RyaW5nLCByb3V0ZU5hbWU6IHN0cmluZywgcGFyYW1zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJtZW51LWJhcjpBZGRNZW51SXRlbVwiKTtcclxuXHJcbiAgICAvLyBoYXZlIHRvIGNoZWNrIHRoZSBzYW1lIGl0ZW0gaXMgbm90IHRoZXJlIGFscmVhZHlcclxuICAgIHZhciBpdGVtID0gbmV3IE1lbnVJdGVtKCk7XHJcbiAgICBpdGVtLmlkID0gR3VpZC5uZXdHdWlkKCk7XHJcbiAgICBpdGVtLmNhbkNsb3NlID0gY2FuQ2xvc2U7XHJcbiAgICBpdGVtLnRpdGxlID0gdGl0bGU7XHJcbiAgICBpdGVtLnJvdXRlTmFtZSA9IHJvdXRlTmFtZTtcclxuICAgIGl0ZW0ucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgaXRlbS5pbnRlcm5hbEhhc2hLZXkgPSB0aGlzLmdldEludGVybmFsSGFzaEtleShpdGVtKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gdGhpcy5tZW51SXRlbUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgaWYgKHRoaXMubWVudUl0ZW1MaXN0W2ldLmludGVybmFsSGFzaEtleSA9PT0gaXRlbS5pbnRlcm5hbEhhc2hLZXkpIHtcclxuICAgICAgICAgdGhpcy5zZWxlY3RNZW51SXRlbSh0aGlzLm1lbnVJdGVtTGlzdFtpXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBub3QgZm91bmQgc28gcHVzaC4uLlxyXG4gICAgdGhpcy5tZW51SXRlbUxpc3QucHVzaChpdGVtKTtcclxuICAgIC8vIG5vdyBhc3N1bWUgd2Ugd2FudCB0byBnbyB0byBpdFxyXG4gICAgdGhpcy5zZWxlY3RNZW51SXRlbShpdGVtKTtcclxuICB9XHJcblxyXG4gIGdldEludGVybmFsSGFzaEtleShpdGVtOiBNZW51SXRlbSl7XHJcbiAgICB2YXIgcmVzdWx0ID0gaXRlbS5yb3V0ZU5hbWUrXCI6XCIrSlNPTi5zdHJpbmdpZnkoaXRlbS5wYXJhbXMpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHNwbGljZU1lbnVJdGVtRnJvbU1lbnVJdGVtTGlzdChtZW51SXRlbTogTWVudUl0ZW0pe1xyXG4gICAgZm9yICh2YXIgaSA9IHRoaXMubWVudUl0ZW1MaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGlmICh0aGlzLm1lbnVJdGVtTGlzdFtpXS5pZCA9PT0gbWVudUl0ZW0uaWQpIHtcclxuICAgICAgICB0aGlzLm1lbnVJdGVtTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdE1lbnVJdGVtKG1lbnVJdGVtOiBNZW51SXRlbSkge1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcIm1lbnUtYmFyOlNlbGVjdE1lbnVJdGVtXCIpO1xyXG4gICAgdGhpcy5uYXZpZ2F0aW5nVG9NZW51SXRlbSA9IG1lbnVJdGVtO1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShtZW51SXRlbS5yb3V0ZU5hbWUsIG1lbnVJdGVtLnBhcmFtcyk7XHJcbiAgICBjb25zb2xlLmRlYnVnKFwibWVudS1iYXI6U2VsZWN0TWVudUl0ZW0gXCIgKyByZXN1bHQudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVNZW51SXRlbShtZW51SXRlbTogTWVudUl0ZW0pIHtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJtZW51LWJhcjpSZW1vdmVNZW51SXRlbVwiKTtcclxuICAgIC8vIHRoaXMganVzdCBtYXJrcyB0aGUgbWVudSBhcyBkZWxldGVkIGFuZCBcclxuICAgIGZvciAodmFyIGkgPSB0aGlzLm1lbnVJdGVtTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAodGhpcy5tZW51SXRlbUxpc3RbaV0uaWQgPT09IG1lbnVJdGVtLmlkKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGluZ01lbnVJdGVtID0gbWVudUl0ZW07XHJcbiAgICAgICAgLy8gaWYgaXRlbSB0byBkZWxldGUgaXMgdGhlIHNlbGVjdGVkIGl0ZW0gbmVlZCB0byBtb3ZlIG9mZiB0byBhbm90aGVyIHRhYiB0byBjaGVjayBjYW4gZGlzcG9zZS5cclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkTWVudUl0ZW0gIT0gbnVsbCAmJiB0aGlzLmRlbGV0aW5nTWVudUl0ZW0uaWQgIT09IHRoaXMuc2VsZWN0ZWRNZW51SXRlbS5pZCl7XHJcbiAgICAgICAgICB0aGlzLnNwbGljZU1lbnVJdGVtRnJvbU1lbnVJdGVtTGlzdCh0aGlzLmRlbGV0aW5nTWVudUl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyB1c2Ugcm91dGVyIHNlbGVjdGVkIGNvbXBsZXRlIHRvIGNoYW5nZSBtZW51LlxyXG4gICAgICAgICAgaWYgKHRoaXMubWVudUl0ZW1MaXN0Lmxlbmd0aC0xID4gaSkge1xyXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpbmdUb01lbnVJdGVtID0gdGhpcy5tZW51SXRlbUxpc3RbaSsxXTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaT4wKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGluZ1RvTWVudUl0ZW0gPSB0aGlzLm1lbnVJdGVtTGlzdFtpLTFdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKHRoaXMubmF2aWdhdGluZ1RvTWVudUl0ZW0ucm91dGVOYW1lLCB0aGlzLm5hdmlnYXRpbmdUb01lbnVJdGVtLnBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERJRCBGSU5EIElURU0gVE8gREVMRVRFIFNPIGNhbiBicmVhayBvdXQgb2YgZm9yIGxvb3BcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVJdGVtIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNhbkNsb3NlOiBib29sZWFuO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcm91dGVOYW1lOiBzdHJpbmc7XHJcbiAgcGFyYW1zOiBhbnk7XHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgaW50ZXJuYWxIYXNoS2V5OiBzdHJpbmc7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('page-one',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageOne = (function () {
        function PageOne() {
            this.email = "testEmail";
        }
        PageOne.prototype.created = function () {
            console.debug("PageOne created");
        };
        PageOne.prototype.activate = function (context) {
            this.email = context.id;
        };
        PageOne.prototype.attached = function () {
            console.debug("PageOne attached");
        };
        PageOne.prototype.detached = function () {
            console.debug("PageOne detached");
        };
        return PageOne;
    }());
    exports.PageOne = PageOne;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utb25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7WUFFSSxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBcUJoQyxDQUFDO1FBakJDLHlCQUFPLEdBQVA7WUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELDBCQUFRLEdBQVIsVUFBUyxPQUFPO1lBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFHSCxjQUFDO0lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtJQXZCWSwwQkFBTyIsImZpbGUiOiJwYWdlLW9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlT25lIHtcclxuXHJcbiAgICBlbWFpbDogc3RyaW5nID0gXCJ0ZXN0RW1haWxcIjtcclxuXHJcblxyXG5cclxuICBjcmVhdGVkKCkge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKFwiUGFnZU9uZSBjcmVhdGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoY29udGV4dCkge1xyXG4gICAgICB0aGlzLmVtYWlsID0gY29udGV4dC5pZDtcclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKFwiUGFnZU9uZSBhdHRhY2hlZFwiKTtcclxuICB9XHJcblxyXG4gIGRldGFjaGVkKCkge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKFwiUGFnZU9uZSBkZXRhY2hlZFwiKTtcclxuICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('page-two',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageTwo = (function () {
        function PageTwo() {
            this.email = "";
            console.debug("PageTwo constructor");
            this.email = "PAGE TWO EMAIL ADDRESS";
        }
        PageTwo.prototype.created = function () {
            console.debug("PageTwo created");
        };
        PageTwo.prototype.activate = function (context) {
            this.email = context.id + ' ' + context.other;
        };
        PageTwo.prototype.bind = function (bindingContext, overrideContext) {
            console.debug("PageTwo bind " + bindingContext.toString());
        };
        PageTwo.prototype.attached = function () {
            console.debug("PageTwo attached");
        };
        PageTwo.prototype.detached = function () {
            console.debug("PageTwo detached");
        };
        PageTwo.prototype.unbind = function () {
            console.debug("PageTwo unbind");
        };
        PageTwo.prototype.canDeactivate = function () {
            console.debug("PageTwo canDeactivate");
            return true;
        };
        return PageTwo;
    }());
    exports.PageTwo = PageTwo;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtdHdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBR0k7WUFGQSxVQUFLLEdBQVcsRUFBRSxDQUFDO1lBR2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUM7UUFDMUMsQ0FBQztRQUNELHlCQUFPLEdBQVA7WUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELDBCQUFRLEdBQVIsVUFBUyxPQUFPO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2hELENBQUM7UUFFRCxzQkFBSSxHQUFKLFVBQUssY0FBc0IsRUFBRSxlQUF1QjtZQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBRUQsMEJBQVEsR0FBUjtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsMEJBQVEsR0FBUjtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0Qsd0JBQU0sR0FBTjtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBRUQsK0JBQWEsR0FBYjtZQUNLLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBR2pCLENBQUM7UUFNTCxjQUFDO0lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtJQXpDWSwwQkFBTyIsImZpbGUiOiJwYWdlLXR3by5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlVHdvIHtcclxuICAgIGVtYWlsOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJQYWdlVHdvIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBcIlBBR0UgVFdPIEVNQUlMIEFERFJFU1NcIjtcclxuICAgIH1cclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlBhZ2VUd28gY3JlYXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZShjb250ZXh0KSB7XHJcbiAgICAgIHRoaXMuZW1haWwgPSBjb250ZXh0LmlkICsgJyAnICsgY29udGV4dC5vdGhlcjtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kKGJpbmRpbmdDb250ZXh0OiBPYmplY3QsIG92ZXJyaWRlQ29udGV4dDogT2JqZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlBhZ2VUd28gYmluZCBcIiArIGJpbmRpbmdDb250ZXh0LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJQYWdlVHdvIGF0dGFjaGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJQYWdlVHdvIGRldGFjaGVkXCIpO1xyXG4gICAgfVxyXG4gICAgdW5iaW5kKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJQYWdlVHdvIHVuYmluZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWFjdGl2YXRlKCl7XHJcbiAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJQYWdlVHdvIGNhbkRlYWN0aXZhdGVcIik7XHJcbiAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vICBpZiAoY29uZmlybShcIldhbnQgdG8gbW92ZT9cIikpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('common/guid',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Guid = (function () {
        function Guid() {
        }
        Guid.newGuid = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        return Guid;
    }());
    exports.Guid = Guid;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9ndWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFPQSxDQUFDO1FBTlUsWUFBTyxHQUFkO1lBQ0ksTUFBTSxDQUFDLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzRCxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDTCxXQUFDO0lBQUQsQ0FQQSxBQU9DLElBQUE7SUFQWSxvQkFBSSIsImZpbGUiOiJjb21tb24vZ3VpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHdWlkIHtcclxuICAgIHN0YXRpYyBuZXdHdWlkKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpKjE2fDAsIHYgPSBjID09ICd4JyA/IHIgOiAociYweDN8MHg4KTtcclxuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24pIHtcclxuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('page-two.1',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageTwo = (function () {
        function PageTwo() {
            this.email = "";
            console.debug("PageTwo constructor");
            this.email = "PAGE TWO EMAIL ADDRESS";
        }
        PageTwo.prototype.created = function () {
            console.debug("PageTwo created");
        };
        PageTwo.prototype.activate = function (context) {
            this.email = context.id + ' ' + context.other;
        };
        PageTwo.prototype.bind = function (bindingContext, overrideContext) {
            console.debug("PageTwo bind " + bindingContext.toString());
        };
        PageTwo.prototype.attached = function () {
            console.debug("PageTwo attached");
        };
        PageTwo.prototype.detached = function () {
            console.debug("PageTwo detached");
        };
        PageTwo.prototype.unbind = function () {
            console.debug("PageTwo unbind");
        };
        PageTwo.prototype.canDeactivate = function () {
            console.debug("PageTwo canDeactivate");
            return true;
        };
        return PageTwo;
    }());
    exports.PageTwo = PageTwo;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtdHdvLjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFHSTtZQUZBLFVBQUssR0FBVyxFQUFFLENBQUM7WUFHZixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztRQUMxQyxDQUFDO1FBQ0QseUJBQU8sR0FBUDtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsMEJBQVEsR0FBUixVQUFTLE9BQU87WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDaEQsQ0FBQztRQUVELHNCQUFJLEdBQUosVUFBSyxjQUFzQixFQUFFLGVBQXVCO1lBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCx3QkFBTSxHQUFOO1lBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFFRCwrQkFBYSxHQUFiO1lBQ0ssT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFHakIsQ0FBQztRQU1MLGNBQUM7SUFBRCxDQXpDQSxBQXlDQyxJQUFBO0lBekNZLDBCQUFPIiwiZmlsZSI6InBhZ2UtdHdvLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZVR3byB7XHJcbiAgICBlbWFpbDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiUGFnZVR3byBjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICB0aGlzLmVtYWlsID0gXCJQQUdFIFRXTyBFTUFJTCBBRERSRVNTXCI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJQYWdlVHdvIGNyZWF0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoY29udGV4dCkge1xyXG4gICAgICB0aGlzLmVtYWlsID0gY29udGV4dC5pZCArICcgJyArIGNvbnRleHQub3RoZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZChiaW5kaW5nQ29udGV4dDogT2JqZWN0LCBvdmVycmlkZUNvbnRleHQ6IE9iamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJQYWdlVHdvIGJpbmQgXCIgKyBiaW5kaW5nQ29udGV4dC50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiUGFnZVR3byBhdHRhY2hlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiUGFnZVR3byBkZXRhY2hlZFwiKTtcclxuICAgIH1cclxuICAgIHVuYmluZCgpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiUGFnZVR3byB1bmJpbmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGVhY3RpdmF0ZSgpe1xyXG4gICAgICAgICBjb25zb2xlLmRlYnVnKFwiUGFnZVR3byBjYW5EZWFjdGl2YXRlXCIpO1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyAgaWYgKGNvbmZpcm0oXCJXYW50IHRvIG1vdmU/XCIpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('search-window',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SearchWindow = (function () {
        function SearchWindow() {
            this.email = "";
            console.debug("SearchWindow constructor");
            this.email = "SearchWindow ADDRESS";
        }
        SearchWindow.prototype.created = function () {
            console.debug("SearchWindow created");
        };
        SearchWindow.prototype.activate = function (context) {
            this.email = context.id + ' ' + context.other;
        };
        SearchWindow.prototype.bind = function (bindingContext, overrideContext) {
            console.debug("SearchWindow bind " + bindingContext.toString());
        };
        SearchWindow.prototype.attached = function () {
            console.debug("SearchWindow attached");
        };
        SearchWindow.prototype.detached = function () {
            console.debug("SearchWindow detached");
        };
        SearchWindow.prototype.unbind = function () {
            console.debug("SearchWindow unbind");
        };
        SearchWindow.prototype.canDeactivate = function () {
            console.debug("SearchWindow canDeactivate");
            if (confirm("Want to move?"))
                return true;
            return false;
        };
        return SearchWindow;
    }());
    exports.SearchWindow = SearchWindow;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC13aW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFHSTtZQUZBLFVBQUssR0FBVyxFQUFFLENBQUM7WUFHZixPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsOEJBQU8sR0FBUDtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsK0JBQVEsR0FBUixVQUFTLE9BQU87WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDaEQsQ0FBQztRQUVELDJCQUFJLEdBQUosVUFBSyxjQUFzQixFQUFFLGVBQXVCO1lBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEdBQUcsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVELCtCQUFRLEdBQVI7WUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVELCtCQUFRLEdBQVI7WUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELDZCQUFNLEdBQU47WUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVELG9DQUFhLEdBQWI7WUFDSyxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFFM0MsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDMUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNuQixDQUFDO1FBTUwsbUJBQUM7SUFBRCxDQXpDQSxBQXlDQyxJQUFBO0lBekNZLG9DQUFZIiwiZmlsZSI6InNlYXJjaC13aW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2VhcmNoV2luZG93IHtcclxuICAgIGVtYWlsOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTZWFyY2hXaW5kb3cgY29uc3RydWN0b3JcIik7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IFwiU2VhcmNoV2luZG93IEFERFJFU1NcIjtcclxuICAgIH1cclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNlYXJjaFdpbmRvdyBjcmVhdGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKGNvbnRleHQpIHtcclxuICAgICAgdGhpcy5lbWFpbCA9IGNvbnRleHQuaWQgKyAnICcgKyBjb250ZXh0Lm90aGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoYmluZGluZ0NvbnRleHQ6IE9iamVjdCwgb3ZlcnJpZGVDb250ZXh0OiBPYmplY3QpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2VhcmNoV2luZG93IGJpbmQgXCIgKyBiaW5kaW5nQ29udGV4dC50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2VhcmNoV2luZG93IGF0dGFjaGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTZWFyY2hXaW5kb3cgZGV0YWNoZWRcIik7XHJcbiAgICB9XHJcbiAgICB1bmJpbmQoKSB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNlYXJjaFdpbmRvdyB1bmJpbmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGVhY3RpdmF0ZSgpe1xyXG4gICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2VhcmNoV2luZG93IGNhbkRlYWN0aXZhdGVcIik7XHJcbiAgICAgICAgIC8vcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICBpZiAoY29uZmlybShcIldhbnQgdG8gbW92ZT9cIikpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./menu-bar\"></require><menu-bar></menu-bar><router-view></router-view></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><h1>Home Page</h1><br><button click.delegate=\"CreatePageOneMenu()\">Add a Page One Menu Item</button><br><button click.delegate=\"CreatePageTwoMenu()\">Add a Page Two Menu Item</button><br><button click.delegate=\"CreateSearchWindow()\">Add a Search Page Menu Item</button></template>"; });
define('text!menu-bar.html', ['module'], function(module) { module.exports = "<template><ul class=\"nav nav-tabs\"><li repeat.for=\"menuItem of menuItemList\"><a class=\"list-group-item ${menuItem.selected ? 'active' : ''}\"><span if.bind=\"menuItem.canClose\" class=\"glyphicon glyphicon-remove\" click.delegate=\"removeMenuItem(menuItem)\"></span> <span click.delegate=\"selectMenuItem(menuItem)\">${menuItem.title}</span><br></a></li></ul></template>"; });
define('text!page-one.html', ['module'], function(module) { module.exports = "<template><h1>page one</h1><br><input type=\"text\" value.bind=\"email\" placeholder=\"Email\"></template>"; });
define('text!page-two.html', ['module'], function(module) { module.exports = "<template><h1>Page Two</h1><br><input type=\"text\" value.bind=\"email\" placeholder=\"Email\"></template>"; });
define('text!page-two.1.html', ['module'], function(module) { module.exports = "<template><h1>Page Two</h1><br><input type=\"text\" value.bind=\"email\" placeholder=\"Email\"></template>"; });
define('text!search-window.html', ['module'], function(module) { module.exports = "<template><h1>search window</h1><br><input type=\"text\" value.bind=\"email\" placeholder=\"Email\"></template>"; });
//# sourceMappingURL=app-bundle.js.map