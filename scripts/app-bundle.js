define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.menuItemList = null;
            this.counter = 1;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Lentune';
            config.map([
                { route: '', name: 'Home', moduleId: 'home', title: 'Home' },
                { route: 'xxx', name: 'page-one', moduleId: 'page-one', title: 'Page One' },
                { route: 'yyy', name: 'page-two', moduleId: 'page-two', title: 'Page Two' },
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUtFO1lBSEEsaUJBQVksR0FBZSxJQUFJLENBQUM7WUFDaEMsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUdwQixDQUFDO1FBRUQsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDekQsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQU8sSUFBSSxFQUFDLE1BQU0sRUFBbUIsUUFBUSxFQUFFLE1BQU0sRUFBTSxLQUFLLEVBQUMsTUFBTSxFQUFDO2dCQUNuRixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUcsSUFBSSxFQUFDLFVBQVUsRUFBSSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxVQUFVLEVBQUM7Z0JBQzNFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRyxJQUFJLEVBQUMsVUFBVSxFQUFJLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLFVBQVUsRUFBQzthQUU1RSxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUgsVUFBQztJQUFELENBcEJBLEFBb0JDLElBQUE7SUFwQlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7TWVudUl0ZW19IGZyb20gJy4vbWVudS1iYXInO1xuaW1wb3J0IHtHdWlkfSBmcm9tICcuL2NvbW1vbi9ndWlkJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlcjogUm91dGVyO1xuICBtZW51SXRlbUxpc3Q6IE1lbnVJdGVtW10gPSBudWxsO1xuICBjb3VudGVyOiBudW1iZXIgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpe1xuICAgIGNvbmZpZy50aXRsZSA9ICdMZW50dW5lJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6ICcnLCAgICAgIG5hbWU6J0hvbWUnLCAgICAgICAgICAgICAgICAgIG1vZHVsZUlkOiAnaG9tZScsICAgICB0aXRsZTonSG9tZSd9LFxuICAgICAgeyByb3V0ZTogJ3h4eCcsICBuYW1lOidwYWdlLW9uZScsICAgbW9kdWxlSWQ6ICdwYWdlLW9uZScsIHRpdGxlOidQYWdlIE9uZSd9LFxuICAgICAgeyByb3V0ZTogJ3l5eScsICBuYW1lOidwYWdlLXR3bycsICAgbW9kdWxlSWQ6ICdwYWdlLXR3bycsIHRpdGxlOidQYWdlIFR3byd9LFxuXG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
            this.eventAggregator = eventAggregator;
        }
        Home.prototype.CreatePageOneMenu = function () {
            var menuItem = new menu_bar_1.MenuItem();
            menuItem.CanClose = true;
            menuItem.Title = "PageOneFromPublish";
            menuItem.RouteName = "page-one";
            this.eventAggregator.publish('AddMenuItem', menuItem);
        };
        Home.prototype.CreatePageTwoMenu = function () {
            var menuItem = new menu_bar_1.MenuItem();
            menuItem.CanClose = true;
            menuItem.Title = "PageTwo";
            menuItem.RouteName = "page-two";
            this.eventAggregator.publish('AddMenuItem', menuItem);
        };
        return Home;
    }());
    Home = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [Object])
    ], Home);
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0EsSUFBYSxJQUFJO1FBSWYsY0FBWSxlQUFlO1lBRjNCLFlBQU8sR0FBVyxnQkFBZ0IsQ0FBQztZQUdqQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN6QyxDQUFDO1FBRUQsZ0NBQWlCLEdBQWpCO1lBQ0UsSUFBSSxRQUFRLEdBQWEsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDeEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDekIsUUFBUSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQztZQUN0QyxRQUFRLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVELGdDQUFpQixHQUFqQjtZQUNFLElBQUksUUFBUSxHQUFhLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQ0gsV0FBQztJQUFELENBdkJBLEFBdUJDLElBQUE7SUF2QlksSUFBSTtRQURoQiwwQkFBTSxDQUFDLDBDQUFlLENBQUM7O09BQ1gsSUFBSSxDQXVCaEI7SUF2Qlksb0JBQUkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnLi9tZW51LWJhcidcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBIb21lIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBtZXNzYWdlOiBzdHJpbmcgPSBcIlRoaXNJc0FNZXNzYWdlXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XHJcbiAgfVxyXG5cclxuICBDcmVhdGVQYWdlT25lTWVudSgpIHtcclxuICAgIHZhciBtZW51SXRlbTogTWVudUl0ZW0gPSBuZXcgTWVudUl0ZW0oKTtcclxuICAgIG1lbnVJdGVtLkNhbkNsb3NlID0gdHJ1ZTtcclxuICAgIG1lbnVJdGVtLlRpdGxlID0gXCJQYWdlT25lRnJvbVB1Ymxpc2hcIjtcclxuICAgIG1lbnVJdGVtLlJvdXRlTmFtZSA9IFwicGFnZS1vbmVcIjtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ0FkZE1lbnVJdGVtJywgbWVudUl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgQ3JlYXRlUGFnZVR3b01lbnUoKSB7XHJcbiAgICB2YXIgbWVudUl0ZW06IE1lbnVJdGVtID0gbmV3IE1lbnVJdGVtKCk7XHJcbiAgICBtZW51SXRlbS5DYW5DbG9zZSA9IHRydWU7XHJcbiAgICBtZW51SXRlbS5UaXRsZSA9IFwiUGFnZVR3b1wiO1xyXG4gICAgbWVudUl0ZW0uUm91dGVOYW1lID0gXCJwYWdlLXR3b1wiO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnQWRkTWVudUl0ZW0nLCBtZW51SXRlbSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('menu-bar',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./common/guid"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, guid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MenuBar = (function () {
        function MenuBar(EventAggregator) {
            this.menuItemList = null;
            this.eventAggregator = EventAggregator;
            this.menuItemList = new Array();
            var item = new MenuItem();
            item.Id = guid_1.Guid.newGuid();
            item.CanClose = false;
            item.Title = "Home";
            item.RouteName = "Home";
            this.menuItemList.push(item);
        }
        MenuBar.prototype.created = function () {
            var item = new MenuItem();
            item.Id = guid_1.Guid.newGuid();
            item.CanClose = true;
            item.Title = "PageOne";
            item.RouteName = "page-one";
            this.menuItemList.push(item);
        };
        MenuBar.prototype.attached = function () {
            var _this = this;
            this.subscriberAddMenuItem = this.eventAggregator.subscribe('AddMenuItem', function (response) {
                _this.AddMenuItem(response.CanClose, response.Title, response.RouteName);
            });
        };
        MenuBar.prototype.detached = function () {
            this.subscriberAddMenuItem.dispose();
        };
        MenuBar.prototype.AddMenuItem = function (CanClose, Title, RouteName) {
            var item = new MenuItem();
            item.Id = guid_1.Guid.newGuid();
            item.CanClose = CanClose;
            item.Title = Title;
            item.RouteName = RouteName;
            this.menuItemList.push(item);
        };
        MenuBar.prototype.RemoveMenuItem = function (menuItem) {
            for (var i = this.menuItemList.length - 1; i >= 0; i--) {
                if (this.menuItemList[i].Id === menuItem.Id) {
                    this.menuItemList.splice(i, 1);
                    break;
                }
            }
            i = i - 1;
            if (i >= 0 && i < this.menuItemList.length) {
            }
        };
        return MenuBar;
    }());
    MenuBar = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [Object])
    ], MenuBar);
    exports.MenuBar = MenuBar;
    var MenuItem = (function () {
        function MenuItem() {
        }
        return MenuItem;
    }());
    exports.MenuItem = MenuItem;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9BLElBQWEsT0FBTztRQU9sQixpQkFBWSxlQUFlO1lBRjNCLGlCQUFZLEdBQWUsSUFBSSxDQUFDO1lBRzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztZQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRCx5QkFBTyxHQUFQO1lBQ0csSUFBSSxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRUQsMEJBQVEsR0FBUjtZQUFBLGlCQUlDO1lBSEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxVQUFBLFFBQVE7Z0JBQ2pGLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZDLENBQUM7UUFFRCw2QkFBVyxHQUFYLFVBQVksUUFBaUIsRUFBRSxLQUFhLEVBQUUsU0FBaUI7WUFDN0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRUQsZ0NBQWMsR0FBZCxVQUFlLFFBQWtCO1lBQy9CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3ZELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixDQUFDO1lBQ0gsQ0FBQztZQUNELENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQ1IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBRzFDLENBQUM7UUFDSCxDQUFDO1FBQ0gsY0FBQztJQUFELENBM0RBLEFBMkRDLElBQUE7SUEzRFksT0FBTztRQURuQiwwQkFBTSxDQUFDLDBDQUFlLENBQUM7O09BQ1gsT0FBTyxDQTJEbkI7SUEzRFksMEJBQU87SUE2RHBCO1FBQUE7UUFNQSxDQUFDO1FBQUQsZUFBQztJQUFELENBTkEsQUFNQyxJQUFBO0lBTlksNEJBQVEiLCJmaWxlIjoibWVudS1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnLi9jb21tb24vZ3VpZCc7XG5cblxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXG5leHBvcnQgY2xhc3MgTWVudUJhciB7XG5cbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XG4gIHN1YnNjcmliZXJBZGRNZW51SXRlbTogYW55O1xuLy9AYmluZGFibGVcbiAgbWVudUl0ZW1MaXN0OiBNZW51SXRlbVtdID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihFdmVudEFnZ3JlZ2F0b3IpIHtcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IEV2ZW50QWdncmVnYXRvcjtcbiAgICB0aGlzLm1lbnVJdGVtTGlzdCA9IG5ldyBBcnJheTxNZW51SXRlbT4oKTtcbiAgICB2YXIgaXRlbSA9IG5ldyBNZW51SXRlbSgpO1xuICAgIGl0ZW0uSWQgPSBHdWlkLm5ld0d1aWQoKTtcbiAgICBpdGVtLkNhbkNsb3NlID0gZmFsc2U7XG4gICAgaXRlbS5UaXRsZSA9IFwiSG9tZVwiO1xuICAgIGl0ZW0uUm91dGVOYW1lID0gXCJIb21lXCI7XG4gICAgdGhpcy5tZW51SXRlbUxpc3QucHVzaChpdGVtKTtcbiAgfVxuICBcbiAgY3JlYXRlZCgpIHtcbiAgICAgdmFyIGl0ZW0gPSBuZXcgTWVudUl0ZW0oKTtcbiAgICBpdGVtLklkID0gR3VpZC5uZXdHdWlkKCk7XG4gICAgaXRlbS5DYW5DbG9zZSA9IHRydWU7XG4gICAgaXRlbS5UaXRsZSA9IFwiUGFnZU9uZVwiO1xuICAgIGl0ZW0uUm91dGVOYW1lID0gXCJwYWdlLW9uZVwiO1xuICAgIHRoaXMubWVudUl0ZW1MaXN0LnB1c2goaXRlbSk7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJBZGRNZW51SXRlbSA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnQWRkTWVudUl0ZW0nLCByZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLkFkZE1lbnVJdGVtKHJlc3BvbnNlLkNhbkNsb3NlLCByZXNwb25zZS5UaXRsZSwgcmVzcG9uc2UuUm91dGVOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRldGFjaGVkKCkge1xuICAgIHRoaXMuc3Vic2NyaWJlckFkZE1lbnVJdGVtLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIEFkZE1lbnVJdGVtKENhbkNsb3NlOiBib29sZWFuLCBUaXRsZTogc3RyaW5nLCBSb3V0ZU5hbWU6IHN0cmluZykge1xuICAgIHZhciBpdGVtID0gbmV3IE1lbnVJdGVtKCk7XG4gICAgaXRlbS5JZCA9IEd1aWQubmV3R3VpZCgpO1xuICAgIGl0ZW0uQ2FuQ2xvc2UgPSBDYW5DbG9zZTtcbiAgICBpdGVtLlRpdGxlID0gVGl0bGU7XG4gICAgaXRlbS5Sb3V0ZU5hbWUgPSBSb3V0ZU5hbWU7XG4gICAgdGhpcy5tZW51SXRlbUxpc3QucHVzaChpdGVtKTtcbiAgfVxuXG4gIFJlbW92ZU1lbnVJdGVtKG1lbnVJdGVtOiBNZW51SXRlbSkge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLm1lbnVJdGVtTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKHRoaXMubWVudUl0ZW1MaXN0W2ldLklkID09PSBtZW51SXRlbS5JZCkge1xuICAgICAgICB0aGlzLm1lbnVJdGVtTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpID0gaS0xO1xuICAgIGlmIChpPj0wICYmIGkgPCB0aGlzLm1lbnVJdGVtTGlzdC5sZW5ndGgpe1xuICAgICAgLy8gdGhpcyBpcyB0aGUgaXRlbSB3ZSB3YW50IHRvIGhhdmUgZm9jdXMgXG4gICAgICAvLyBhbmQgbm93IHNldCB0aGlzIHRvIHRoZSByb3V0ZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVudUl0ZW0ge1xuICBJZDogc3RyaW5nO1xuICBDYW5DbG9zZTogYm9vbGVhbjtcbiAgVGl0bGU6IHN0cmluZztcbiAgUm91dGVOYW1lOiBzdHJpbmc7XG4gIFRpcDogc3RyaW5nO1xufVxuXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('page-one',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageOne = (function () {
        function PageOne() {
        }
        return PageOne;
    }());
    exports.PageOne = PageOne;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utb25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFFQSxDQUFDO1FBQUQsY0FBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksMEJBQU8iLCJmaWxlIjoicGFnZS1vbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZU9uZSB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('page-two',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageTwo = (function () {
        function PageTwo() {
        }
        return PageTwo;
    }());
    exports.PageTwo = PageTwo;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtdHdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFFQSxDQUFDO1FBQUQsY0FBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksMEJBQU8iLCJmaWxlIjoicGFnZS10d28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZVR3byB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./menu-bar\"></require><menu-bar></menu-bar><router-view></router-view></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>This is the home page [${message}]<br><button click.delegate=\"CreatePageOneMenu()\">Add a Page One Menu Item</button><br><button click.delegate=\"CreatePageTwoMenu()\">Add a Page Two Menu Item</button></template>"; });
define('text!menu-bar.html', ['module'], function(module) { module.exports = "<template><ul class=\"nav nav-tabs\"><li repeat.for=\"menuItem of menuItemList\"><a route-href=\"route.bind: menuItem.RouteName\"><span if.bind=\"menuItem.CanClose\" class=\"glyphicon glyphicon-remove\" click.delegate=\"RemoveMenuItem(menuItem)\"></span> <span>${menuItem.Title}</span><br><span class=\"tooltiptext\">Tooltip text</span></a></li></ul></template>"; });
define('text!page-one.html', ['module'], function(module) { module.exports = "<template>this is page one<p>envelope icon: <span class=\"glyphicon glyphicon-envelope\"></span></p><p>remove icon: <span class=\"glyphicon glyphicon-remove\"></span></p><p>exclamation-sign icon: <span class=\"glyphicon glyphicon-exclamation-sign\"></span></p>glyphicon glyphicon-exclamation-sign</template>"; });
define('text!page-two.html', ['module'], function(module) { module.exports = "<template>this is page two<p>envelope icon: <span class=\"glyphicon glyphicon-envelope\"></span></p><p>remove icon: <span class=\"glyphicon glyphicon-remove\"></span></p><p>exclamation-sign icon: <span class=\"glyphicon glyphicon-exclamation-sign\"></span></p>glyphicon glyphicon-exclamation-sign</template>"; });
//# sourceMappingURL=app-bundle.js.map