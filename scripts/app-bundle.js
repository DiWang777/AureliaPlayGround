define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUtFO1FBRUEsQ0FBQztRQUVELDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFXLElBQUksRUFBQyxNQUFNLEVBQVMsUUFBUSxFQUFFLE1BQU0sRUFBTSxLQUFLLEVBQUMsTUFBTSxFQUFDO2dCQUM3RSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUksSUFBSSxFQUFDLFVBQVUsRUFBSyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxVQUFVLEVBQUM7Z0JBQ2pGLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFJLElBQUksRUFBQyxVQUFVLEVBQUssUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFDO2dCQUN4RixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBSSxJQUFJLEVBQUMsZUFBZSxFQUFLLFFBQVEsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLGVBQWUsRUFBQzthQUV4RyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUgsVUFBQztJQUFELENBckJBLEFBcUJDLElBQUE7SUFyQlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuLy9pbXBvcnQge0FkZE1haW5NZW51RXZlbnR9IGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCB7R3VpZH0gZnJvbSAnLi9jb21tb24vZ3VpZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICByb3V0ZXI6IFJvdXRlcjtcclxuICBtZW51VHlwZTogYW55O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgIC8vIHRoaXMubWVudVR5cGUgPSBBZGRNYWluTWVudUV2ZW50O1xyXG4gIH1cclxuXHJcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpe1xyXG4gICAgY29uZmlnLnRpdGxlID0gJ0xlbnR1bmUnO1xyXG4gICAgY29uZmlnLm1hcChbXHJcbiAgICAgIHsgcm91dGU6ICcnLCAgICAgICAgICBuYW1lOidIb21lJywgICAgICAgIG1vZHVsZUlkOiAnaG9tZScsICAgICB0aXRsZTonSG9tZSd9LFxyXG4gICAgICB7IHJvdXRlOiAneHh4LzppZCcsICAgbmFtZToncGFnZS1vbmUnLCAgICBtb2R1bGVJZDogJ3BhZ2Utb25lJywgdGl0bGU6J1BhZ2UgT25lJ30sXHJcbiAgICAgIHsgcm91dGU6ICd5eXkvOmlkLzpvdGhlcicsICAgbmFtZToncGFnZS10d28nLCAgICBtb2R1bGVJZDogJ3BhZ2UtdHdvJywgdGl0bGU6J1BhZ2UgVHdvJ30sXHJcbiAgICAgIHsgcm91dGU6ICd6enovOmlkLzpvdGhlcicsICAgbmFtZTonc2VhcmNoLXdpbmRvdycsICAgIG1vZHVsZUlkOiAnc2VhcmNoLXdpbmRvdycsIHRpdGxlOidTZWFyY2ggV2luZG93J30sXHJcblxyXG4gICAgXSk7XHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
define('home',["require", "exports", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1) {
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
            this.eventAggregator.publish('AddMenuItem', { canClose: true, title: "PageOne-autoOpen", routeName: "page-one", params: { id: this.count++ }, autoOpen: true });
        };
        Home.prototype.CreatePageTwoMenu = function () {
            this.eventAggregator.publish('AddMenuItem', { canClose: true, title: "PageTwo-NoAutoOpen", routeName: "page-two", params: { id: this.count++, other: "OTHER" }, autoOpen: false });
        };
        Home.prototype.CreateSearchWindow = function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBTUEsSUFBYSxJQUFJO1FBS2YsY0FBWSxlQUFlO1lBSDNCLFlBQU8sR0FBVyxnQkFBZ0IsQ0FBQztZQUNuQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1lBR2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN6QyxDQUFDO1FBRUQsZ0NBQWlCLEdBQWpCO1lBTUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFakssQ0FBQztRQUVELGdDQUFpQixHQUFqQjtZQUNHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFRckwsQ0FBQztRQUVELGlDQUFrQixHQUFsQjtRQU9BLENBQUM7UUFFSCxXQUFDO0lBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtJQXhDWSxJQUFJO1FBRmhCLDBCQUFNLENBQUMsMENBQWUsQ0FBQztRQUN2Qiw2QkFBUyxFQUFFOztPQUNDLElBQUksQ0F3Q2hCO0lBeENZLG9CQUFJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIHNpbmdsZXRvbiB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuLy9pbSBwb3IgdCB7IEFkZE1haW5NZW51RXZlbnQgfSBmcm9tICcuL2FkZC1tYWluLW1lbnUtZXZlbnQnO1xyXG5cclxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXHJcbkBzaW5nbGV0b24oKVxyXG5leHBvcnQgY2xhc3MgSG9tZSB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgbWVzc2FnZTogc3RyaW5nID0gXCJUaGlzSXNBTWVzc2FnZVwiO1xyXG4gIGNvdW50OiBudW1iZXIgPSAxMjtcclxuXHJcbiAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yKSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKFwiaG9tZS5jb25zdHJ1Y3RvclwiKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xyXG4gIH1cclxuXHJcbiAgQ3JlYXRlUGFnZU9uZU1lbnUoKSB7XHJcbiAgICAvLyB2YXIgbWVudUl0ZW06IE1lbnVJdGVtICA9IG5ldyBBZGRNYWluTWVudUV2ZW50KCk7XHJcbiAgICAvLyBtZW51SXRlbS50aXRsZSA9IFwiUGFnZU9uZS1hdXRvT3BlblwiO1xyXG4gICAgLy8gbWVudUl0ZW0ucm91dGVOYW1lID0gXCJwYWdlLW9uZVwiO1xyXG4gICAgLy8gbWVudUl0ZW0ucGFyYW1zID0ge2lkOiB0aGlzLmNvdW50KysgfTtcclxuICAgIC8vIG1lbnVJdGVtLmF1dG9PcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ0FkZE1lbnVJdGVtJywgeyBjYW5DbG9zZTogdHJ1ZSwgdGl0bGU6IFwiUGFnZU9uZS1hdXRvT3BlblwiLCByb3V0ZU5hbWU6IFwicGFnZS1vbmVcIiwgcGFyYW1zOiB7aWQ6IHRoaXMuY291bnQrKyB9LCBhdXRvT3BlbjogdHJ1ZSB9KTtcclxuICAgIC8vdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChtZW51SXRlbSk7XHJcbiAgfVxyXG4gXHJcbiAgQ3JlYXRlUGFnZVR3b01lbnUoKSB7XHJcbiAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnQWRkTWVudUl0ZW0nLCB7IGNhbkNsb3NlOiB0cnVlLCB0aXRsZTogXCJQYWdlVHdvLU5vQXV0b09wZW5cIiwgcm91dGVOYW1lOiBcInBhZ2UtdHdvXCIsIHBhcmFtczoge2lkOiB0aGlzLmNvdW50KyssIG90aGVyOiBcIk9USEVSXCIgfSwgYXV0b09wZW46IGZhbHNlIH0pO1xyXG4gICAgLy8gdmFyIG1lbnVJdGVtOiBNZW51SXRlbSA9IG5ldyBNZW51SXRlbSgpO1xyXG4gICAgLy8gbWVudUl0ZW0uY2FuQ2xvc2UgPSB0cnVlO1xyXG4gICAgLy8gbWVudUl0ZW0udGl0bGUgPSBcIlBhZ2VUd28tbm9BdXRvXCI7XHJcbiAgICAvLyBtZW51SXRlbS5yb3V0ZU5hbWUgPSBcInBhZ2UtdHdvXCI7XHJcbiAgICAvLyBtZW51SXRlbS5wYXJhbXMgPSB7aWQ6IHRoaXMuY291bnQrKywgb3RoZXI6IFwiZmZmXCIgfTtcclxuICAgIC8vIG1lbnVJdGVtLmF1dG9PcGVuID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdBZGRNZW51SXRlbScsIG1lbnVJdGVtKTtcclxuICB9XHJcblxyXG4gIENyZWF0ZVNlYXJjaFdpbmRvdygpIHtcclxuICAgIC8vIHZhciBtZW51SXRlbTogTWVudUl0ZW0gPSBuZXcgTWVudUl0ZW0oKTtcclxuICAgIC8vIG1lbnVJdGVtLmNhbkNsb3NlID0gdHJ1ZTtcclxuICAgIC8vIG1lbnVJdGVtLnRpdGxlID0gXCJTYW1wbGUgU2VhcmNoV2luZG93XCI7XHJcbiAgICAvLyBtZW51SXRlbS5yb3V0ZU5hbWUgPSBcInNlYXJjaC13aW5kb3dcIjtcclxuICAgIC8vIG1lbnVJdGVtLnBhcmFtcyA9IHtpZDogXCJGaXhlZFwiLCBvdGhlcjogXCJmZmZcIiB9O1xyXG4gICAgLy8gdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnQWRkTWVudUl0ZW0nLCBtZW51SXRlbSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment", "kendo/js/kendo.grid"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin('aurelia-kendoui-bridge')
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBTUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsTUFBTSxDQUFDLHdCQUF3QixDQUFDO2FBQ2hDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUd4QixFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWhCRCw4QkFnQkMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXHJcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgJ2tlbmRvL2pzL2tlbmRvLmdyaWQnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xyXG4gIGF1cmVsaWEudXNlXHJcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgIC5wbHVnaW4oJ2F1cmVsaWEta2VuZG91aS1icmlkZ2UnKVxyXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xyXG4gICAgXHJcblxyXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xyXG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xyXG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcclxuICB9XHJcblxyXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('page-one',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageOne = (function () {
        function PageOne() {
            this.email = "testEmail";
            this.datasource = {
                data: [
                    { ContactName: 'test' },
                    { ContactName: 'test 111' },
                    { ContactName: 'test 222' },
                    { ContactName: 'test 333' },
                    { ContactName: 'test 444' },
                    { ContactName: 'test 555' },
                    { ContactName: 'test 666' },
                ],
                pageSize: 5
            };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utb25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBS0k7WUFIQSxVQUFLLEdBQVcsV0FBVyxDQUFDO1lBSXhCLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2QsSUFBSSxFQUFDO29CQUNMLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQztvQkFDcEIsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDO29CQUN4QixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUM7b0JBQ3hCLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQztvQkFDeEIsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDO29CQUN4QixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUM7b0JBQ3hCLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQztpQkFDdkI7Z0JBQ0QsUUFBUSxFQUFFLENBQUM7YUFDZCxDQUFDO1FBQ04sQ0FBQztRQUdELHlCQUFPLEdBQVA7WUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELDBCQUFRLEdBQVIsVUFBUyxPQUFPO1lBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFHTCxjQUFDO0lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtJQXRDWSwwQkFBTyIsImZpbGUiOiJwYWdlLW9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlT25lIHtcclxuICAgIFxyXG4gICAgZW1haWw6IHN0cmluZyA9IFwidGVzdEVtYWlsXCI7XHJcbiAgICBkYXRhc291cmNlOmFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmRhdGFzb3VyY2UgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6W1xyXG4gICAgICAgICAgICB7Q29udGFjdE5hbWU6J3Rlc3QnfSxcclxuICAgICAgICAgICAge0NvbnRhY3ROYW1lOid0ZXN0IDExMSd9LFxyXG4gICAgICAgICAgICB7Q29udGFjdE5hbWU6J3Rlc3QgMjIyJ30sXHJcbiAgICAgICAgICAgIHtDb250YWN0TmFtZTondGVzdCAzMzMnfSxcclxuICAgICAgICAgICAge0NvbnRhY3ROYW1lOid0ZXN0IDQ0NCd9LFxyXG4gICAgICAgICAgICB7Q29udGFjdE5hbWU6J3Rlc3QgNTU1J30sXHJcbiAgICAgICAgICAgIHtDb250YWN0TmFtZTondGVzdCA2NjYnfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IDVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlBhZ2VPbmUgY3JlYXRlZFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWN0aXZhdGUoY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBjb250ZXh0LmlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiUGFnZU9uZSBhdHRhY2hlZFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlBhZ2VPbmUgZGV0YWNoZWRcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('search-window',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./common/menu-item"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, menu_item_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SearchWindow = (function () {
        function SearchWindow(eventAggregator) {
            this.eventAggregator = eventAggregator;
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
            return true;
        };
        SearchWindow.prototype.CreatePageFourMenu = function () {
            var menuItem = new menu_item_1.MenuItem();
            menuItem.canClose = true;
            menuItem.title = "PageFour";
            menuItem.routeName = "page-four";
            this.eventAggregator.publish('AddMenuItem', menuItem);
        };
        return SearchWindow;
    }());
    SearchWindow = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], SearchWindow);
    exports.SearchWindow = SearchWindow;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC13aW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBTUEsSUFBYSxZQUFZO1FBR3JCLHNCQUFvQixlQUFnQztZQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFGcEQsVUFBSyxHQUFXLEVBQUUsQ0FBQztZQUdmLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO1FBQ3hDLENBQUM7UUFDRCw4QkFBTyxHQUFQO1lBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCwrQkFBUSxHQUFSLFVBQVMsT0FBTztZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNoRCxDQUFDO1FBRUQsMkJBQUksR0FBSixVQUFLLGNBQXNCLEVBQUUsZUFBdUI7WUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBRUQsK0JBQVEsR0FBUjtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQsK0JBQVEsR0FBUjtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsNkJBQU0sR0FBTjtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRUQsb0NBQWEsR0FBYjtZQUNLLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBR2pCLENBQUM7UUFFTCx5Q0FBa0IsR0FBbEI7WUFDSSxJQUFJLFFBQVEsR0FBYSxJQUFJLG9CQUFRLEVBQUUsQ0FBQztZQUN4QyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN6QixRQUFRLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUM1QixRQUFRLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUtILG1CQUFDO0lBQUQsQ0FoREEsQUFnREMsSUFBQTtJQWhEWSxZQUFZO1FBRnhCLDhCQUFVLEVBQUU7eUNBSzRCLDBDQUFlO09BSDNDLFlBQVksQ0FnRHhCO0lBaERZLG9DQUFZIiwiZmlsZSI6InNlYXJjaC13aW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4vY29tbW9uL21lbnUtaXRlbSc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoV2luZG93IHtcclxuICAgIGVtYWlsOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2VhcmNoV2luZG93IGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBcIlNlYXJjaFdpbmRvdyBBRERSRVNTXCI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTZWFyY2hXaW5kb3cgY3JlYXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZShjb250ZXh0KSB7XHJcbiAgICAgIHRoaXMuZW1haWwgPSBjb250ZXh0LmlkICsgJyAnICsgY29udGV4dC5vdGhlcjtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kKGJpbmRpbmdDb250ZXh0OiBPYmplY3QsIG92ZXJyaWRlQ29udGV4dDogT2JqZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNlYXJjaFdpbmRvdyBiaW5kIFwiICsgYmluZGluZ0NvbnRleHQudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNlYXJjaFdpbmRvdyBhdHRhY2hlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2VhcmNoV2luZG93IGRldGFjaGVkXCIpO1xyXG4gICAgfVxyXG4gICAgdW5iaW5kKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTZWFyY2hXaW5kb3cgdW5iaW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkRlYWN0aXZhdGUoKXtcclxuICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNlYXJjaFdpbmRvdyBjYW5EZWFjdGl2YXRlXCIpO1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgLy8gaWYgKGNvbmZpcm0oXCJXYW50IHRvIG1vdmU/XCIpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuQ3JlYXRlUGFnZUZvdXJNZW51KCkge1xyXG4gICAgdmFyIG1lbnVJdGVtOiBNZW51SXRlbSA9IG5ldyBNZW51SXRlbSgpO1xyXG4gICAgbWVudUl0ZW0uY2FuQ2xvc2UgPSB0cnVlO1xyXG4gICAgbWVudUl0ZW0udGl0bGUgPSBcIlBhZ2VGb3VyXCI7XHJcbiAgICBtZW51SXRlbS5yb3V0ZU5hbWUgPSBcInBhZ2UtZm91clwiO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnQWRkTWVudUl0ZW0nLCBtZW51SXRlbSk7XHJcbiAgfVxyXG4gXHJcblxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('common/main-menu',["require", "exports", "aurelia-router", "aurelia-framework", "aurelia-event-aggregator", "./guid"], function (require, exports, aurelia_router_1, aurelia_framework_1, aurelia_event_aggregator_1, guid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainMenu = (function () {
        function MainMenu(eventAggregator, router) {
            this.eventAggregator = eventAggregator;
            this.router = router;
            this.menuItemList = null;
            this.menuItemList = new Array();
        }
        MainMenu.prototype.created = function () {
            console.debug("menu-bar:created");
        };
        MainMenu.prototype.attached = function () {
            var _this = this;
            console.debug("menu-bar:attached");
            var item = new MenuItem();
            item.canClose = false;
            item.title = "Home";
            item.routeName = "Home";
            item.autoOpen = true;
            this.addMenuItem(false, "Home", "Home", null, true);
            this.subscriberAddMenuItem = this.eventAggregator.subscribe('AddMenuItem', function (response) { _this.addMenuItem(response.canClose, response.title, response.routeName, response.params, response.autoOpen); });
            this.routerNavigationSuccessSubscription = this.eventAggregator.subscribe('router:navigation:success', this.handleRouterNavigationSuccessEvent.bind(this));
            this.routerNavigationCanceledSubscription = this.eventAggregator.subscribe('router:navigation:canceled', this.handleRouterNavigationCanceledEvent.bind(this));
        };
        MainMenu.prototype.handleRouterNavigationCanceledEvent = function (details) {
            console.debug("menu-bar:handleRouterNavigationCanceledEvent");
            this.deletingMenuItem = null;
            this.navigatingToMenuItem = null;
        };
        MainMenu.prototype.handleRouterNavigationSuccessEvent = function (details) {
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
        MainMenu.prototype.setActiveStatusOnMenuItems = function () {
            for (var i = this.menuItemList.length - 1; i >= 0; i--) {
                if (this.menuItemList[i].id === this.selectedMenuItem.id)
                    this.menuItemList[i].selected = true;
                else
                    this.menuItemList[i].selected = false;
            }
        };
        MainMenu.prototype.detached = function () {
            console.debug("menu-bar:detached");
            this.subscriberAddMenuItem.dispose();
            this.routerNavigationSuccessSubscription.dispose();
        };
        MainMenu.prototype.addMenuItem = function (canClose, title, routeName, params, autoOpen) {
            var item = new MenuItem();
            console.debug("menu-bar:AddMenuItem");
            item.canClose = canClose;
            item.title = title;
            item.routeName = routeName;
            item.params = params;
            item.autoOpen = autoOpen;
            item.id = guid_1.Guid.newGuid();
            item.internalHashKey = this.getInternalHashKey(item);
            for (var i = this.menuItemList.length - 1; i >= 0; i--) {
                if (this.menuItemList[i].internalHashKey === item.internalHashKey) {
                    this.selectMenuItem(this.menuItemList[i]);
                    return;
                }
            }
            this.menuItemList.push(item);
            if (item.autoOpen) {
                this.selectMenuItem(item);
            }
        };
        MainMenu.prototype.getInternalHashKey = function (item) {
            var result = item.routeName + ":" + JSON.stringify(item.params);
            return result;
        };
        MainMenu.prototype.spliceMenuItemFromMenuItemList = function (menuItem) {
            for (var i = this.menuItemList.length - 1; i >= 0; i--) {
                if (this.menuItemList[i].id === menuItem.id) {
                    this.menuItemList.splice(i, 1);
                    break;
                }
            }
        };
        MainMenu.prototype.selectMenuItem = function (menuItem) {
            console.debug("menu-bar:SelectMenuItem");
            this.navigatingToMenuItem = menuItem;
            var result = this.router.navigateToRoute(menuItem.routeName, menuItem.params);
            console.debug("menu-bar:SelectMenuItem " + result.toString());
        };
        MainMenu.prototype.removeMenuItem = function (menuItem) {
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
        return MainMenu;
    }());
    MainMenu = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router])
    ], MainMenu);
    exports.MainMenu = MainMenu;
    var MenuItem = (function () {
        function MenuItem() {
        }
        return MenuItem;
    }());
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9tYWluLW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBUUEsSUFBYSxRQUFRO1FBYW5CLGtCQUFvQixlQUFnQyxFQUFVLE1BQWM7WUFBeEQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQVg1RSxpQkFBWSxHQUFlLElBQUksQ0FBQztZQVk5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7UUFDNUMsQ0FBQztRQUVELDBCQUFPLEdBQVA7WUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELDJCQUFRLEdBQVI7WUFBQSxpQkFjQztZQWJDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXJCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO1lBRXBELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsVUFBQSxRQUFRLElBQU0sS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpNLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsa0NBQWtDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0osSUFBSSxDQUFDLG9DQUFvQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoSyxDQUFDO1FBRUQsc0RBQW1DLEdBQW5DLFVBQW9DLE9BQU87WUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNuQyxDQUFDO1FBRUQscURBQWtDLEdBQWxDLFVBQW1DLE9BQU87WUFDeEMsT0FBTyxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1lBRzdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2dCQUNsRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQ25DLENBQUM7WUFHRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLENBQUM7WUFFRCxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNwQyxDQUFDO1FBRUQsNkNBQTBCLEdBQTFCO1lBQ0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN2QyxJQUFJO29CQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUMxQyxDQUFDO1FBQ0gsQ0FBQztRQUVELDJCQUFRLEdBQVI7WUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRCxDQUFDO1FBRUQsOEJBQVcsR0FBWCxVQUFZLFFBQWlCLEVBQUUsS0FBYSxFQUFFLFNBQWlCLEVBQUUsTUFBVyxFQUFFLFFBQWlCO1lBQzdGLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFHMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRXpCLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3ZELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsTUFBTSxDQUFDO2dCQUNULENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBRWpCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsQ0FBQztRQUNILENBQUM7UUFFRCxxQ0FBa0IsR0FBbEIsVUFBbUIsSUFBYztZQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxpREFBOEIsR0FBOUIsVUFBK0IsUUFBa0I7WUFDL0MsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0IsS0FBSyxDQUFDO2dCQUNSLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUVELGlDQUFjLEdBQWQsVUFBZSxRQUFrQjtZQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQztZQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RSxPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCxpQ0FBYyxHQUFkLFVBQWUsUUFBa0I7WUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBRXpDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3ZELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO29CQUVqQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ3pGLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDN0QsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFFTixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyRCxDQUFDO3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDZixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JELENBQUM7d0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3JHLENBQUM7b0JBRUQsS0FBSyxDQUFDO2dCQUNSLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNILGVBQUM7SUFBRCxDQXBKQSxBQW9KQyxJQUFBO0lBcEpZLFFBQVE7UUFGcEIsOEJBQVUsRUFBRTt5Q0FlMEIsMENBQWUsRUFBa0IsdUJBQU07T0FiakUsUUFBUSxDQW9KcEI7SUFwSlksNEJBQVE7SUFzSnJCO1FBQUE7UUFTQSxDQUFDO1FBQUQsZUFBQztJQUFELENBVEEsQUFTQyxJQUFBIiwiZmlsZSI6ImNvbW1vbi9tYWluLW1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcbmltcG9ydCB7IGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnLi9ndWlkJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudSB7XHJcbiAgc3Vic2NyaWJlckFkZE1lbnVJdGVtOiBhbnk7XHJcbiAgbWVudUl0ZW1MaXN0OiBNZW51SXRlbVtdID0gbnVsbDtcclxuICBzZWxlY3RlZE1lbnVJdGVtOiBNZW51SXRlbTtcclxuICBuYXZpZ2F0aW5nVG9NZW51SXRlbTogTWVudUl0ZW07XHJcbiAgZGVsZXRpbmdNZW51SXRlbTogTWVudUl0ZW07XHJcblxyXG4gIHJvdXRlck5hdmlnYXRpb25TdWNjZXNzU3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgcm91dGVyTmF2aWdhdGlvbkNhbmNlbGVkU3Vic2NyaXB0aW9uOiBhbnk7XHJcblxyXG4gIC8vIEBiaW5kYWJsZSh7bmFtZTonYWRkLW1lbnUtZXZlbnQnfSlcclxuICAvLyBhZGRNZW51RXZlbnQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5tZW51SXRlbUxpc3QgPSBuZXcgQXJyYXk8TWVudUl0ZW0+KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVkKCkge1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcIm1lbnUtYmFyOmNyZWF0ZWRcIik7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJtZW51LWJhcjphdHRhY2hlZFwiKTtcclxuICAgIHZhciBpdGVtID0gbmV3IE1lbnVJdGVtKCk7XHJcbiAgICBpdGVtLmNhbkNsb3NlID0gZmFsc2U7XHJcbiAgICBpdGVtLnRpdGxlID0gXCJIb21lXCI7XHJcbiAgICBpdGVtLnJvdXRlTmFtZSA9IFwiSG9tZVwiO1xyXG4gICAgaXRlbS5hdXRvT3BlbiA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5hZGRNZW51SXRlbShmYWxzZSxcIkhvbWVcIiwgXCJIb21lXCIsIG51bGwsIHRydWUgKTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmliZXJBZGRNZW51SXRlbSA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnQWRkTWVudUl0ZW0nLCByZXNwb25zZSA9PiB7IHRoaXMuYWRkTWVudUl0ZW0ocmVzcG9uc2UuY2FuQ2xvc2UsIHJlc3BvbnNlLnRpdGxlLCByZXNwb25zZS5yb3V0ZU5hbWUsIHJlc3BvbnNlLnBhcmFtcywgcmVzcG9uc2UuYXV0b09wZW4pOyB9KTtcclxuICAgIC8vdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKHRoaXMuYWRkTWVudUV2ZW50LCAocmVzcG9uc2UpID0+IHsgdGhpcy5hZGRNZW51SXRlbShyZXNwb25zZS5jYW5DbG9zZSwgcmVzcG9uc2UudGl0bGUsIHJlc3BvbnNlLnJvdXRlTmFtZSwgcmVzcG9uc2UucGFyYW1zLCByZXNwb25zZS5hdXRvT3Blbik7IH0pO1xyXG4gICAgdGhpcy5yb3V0ZXJOYXZpZ2F0aW9uU3VjY2Vzc1N1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgncm91dGVyOm5hdmlnYXRpb246c3VjY2VzcycsIHRoaXMuaGFuZGxlUm91dGVyTmF2aWdhdGlvblN1Y2Nlc3NFdmVudC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMucm91dGVyTmF2aWdhdGlvbkNhbmNlbGVkU3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCdyb3V0ZXI6bmF2aWdhdGlvbjpjYW5jZWxlZCcsIHRoaXMuaGFuZGxlUm91dGVyTmF2aWdhdGlvbkNhbmNlbGVkRXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSb3V0ZXJOYXZpZ2F0aW9uQ2FuY2VsZWRFdmVudChkZXRhaWxzKSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKFwibWVudS1iYXI6aGFuZGxlUm91dGVyTmF2aWdhdGlvbkNhbmNlbGVkRXZlbnRcIik7XHJcbiAgICB0aGlzLmRlbGV0aW5nTWVudUl0ZW0gPSBudWxsO1xyXG4gICAgdGhpcy5uYXZpZ2F0aW5nVG9NZW51SXRlbSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSb3V0ZXJOYXZpZ2F0aW9uU3VjY2Vzc0V2ZW50KGRldGFpbHMpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJtZW51LWJhcjpoYW5kbGVSb3V0ZXJOYXZpZ2F0aW9uU3VjY2Vzc0V2ZW50XCIpO1xyXG5cclxuICAgIC8vIFNldCBhY3RpdmUgaXRlbSB0byB0aGUgbmF2aWdhdGluZyB0byBpdGVtIGFzIGV2ZW50IHdhcyBzdWNlc3NmdWxcclxuICAgIGlmICh0aGlzLm5hdmlnYXRpbmdUb01lbnVJdGVtICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE1lbnVJdGVtID0gdGhpcy5uYXZpZ2F0aW5nVG9NZW51SXRlbTtcclxuICAgICAgdGhpcy5uYXZpZ2F0aW5nVG9NZW51SXRlbSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2Vjb25kIGNoZWNrIGlmIGRlbGV0ZSBpdGVtIGlzIHJlcXVpcmVkIGFuZCBtb3ZlIGZyb20gbGlzdFxyXG4gICAgaWYgKHRoaXMuZGVsZXRpbmdNZW51SXRlbSAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc3BsaWNlTWVudUl0ZW1Gcm9tTWVudUl0ZW1MaXN0KHRoaXMuZGVsZXRpbmdNZW51SXRlbSk7XHJcbiAgICAgIHRoaXMuZGVsZXRpbmdNZW51SXRlbSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRBY3RpdmVTdGF0dXNPbk1lbnVJdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlU3RhdHVzT25NZW51SXRlbXMoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gdGhpcy5tZW51SXRlbUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgaWYgKHRoaXMubWVudUl0ZW1MaXN0W2ldLmlkID09PSB0aGlzLnNlbGVjdGVkTWVudUl0ZW0uaWQpXHJcbiAgICAgICAgdGhpcy5tZW51SXRlbUxpc3RbaV0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5tZW51SXRlbUxpc3RbaV0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRldGFjaGVkKCkge1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcIm1lbnUtYmFyOmRldGFjaGVkXCIpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVyQWRkTWVudUl0ZW0uZGlzcG9zZSgpO1xyXG4gICAgdGhpcy5yb3V0ZXJOYXZpZ2F0aW9uU3VjY2Vzc1N1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBhZGRNZW51SXRlbShjYW5DbG9zZTogYm9vbGVhbiwgdGl0bGU6IHN0cmluZywgcm91dGVOYW1lOiBzdHJpbmcsIHBhcmFtczogYW55LCBhdXRvT3BlbjogYm9vbGVhbil7XHJcbiAgICB2YXIgaXRlbSA9IG5ldyBNZW51SXRlbSgpO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmRlYnVnKFwibWVudS1iYXI6QWRkTWVudUl0ZW1cIik7XHJcbiAgICBpdGVtLmNhbkNsb3NlID0gY2FuQ2xvc2U7XHJcbiAgICBpdGVtLnRpdGxlID0gdGl0bGU7XHJcbiAgICBpdGVtLnJvdXRlTmFtZSA9IHJvdXRlTmFtZTtcclxuICAgIGl0ZW0ucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgaXRlbS5hdXRvT3BlbiA9IGF1dG9PcGVuO1xyXG5cclxuICAgIGl0ZW0uaWQgPSBHdWlkLm5ld0d1aWQoKTtcclxuICAgIGl0ZW0uaW50ZXJuYWxIYXNoS2V5ID0gdGhpcy5nZXRJbnRlcm5hbEhhc2hLZXkoaXRlbSk7XHJcbiAgICBmb3IgKHZhciBpID0gdGhpcy5tZW51SXRlbUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgaWYgKHRoaXMubWVudUl0ZW1MaXN0W2ldLmludGVybmFsSGFzaEtleSA9PT0gaXRlbS5pbnRlcm5hbEhhc2hLZXkpIHtcclxuICAgICAgICAgdGhpcy5zZWxlY3RNZW51SXRlbSh0aGlzLm1lbnVJdGVtTGlzdFtpXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBub3QgZm91bmQgc28gcHVzaC4uLlxyXG4gICAgdGhpcy5tZW51SXRlbUxpc3QucHVzaChpdGVtKTtcclxuXHJcbiAgICBpZiAoaXRlbS5hdXRvT3Blbil7XHJcbiAgICAvLyBub3cgYXNzdW1lIHdlIHdhbnQgdG8gZ28gdG8gaXRcclxuICAgICAgdGhpcy5zZWxlY3RNZW51SXRlbShpdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEludGVybmFsSGFzaEtleShpdGVtOiBNZW51SXRlbSl7XHJcbiAgICB2YXIgcmVzdWx0ID0gaXRlbS5yb3V0ZU5hbWUrXCI6XCIrSlNPTi5zdHJpbmdpZnkoaXRlbS5wYXJhbXMpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHNwbGljZU1lbnVJdGVtRnJvbU1lbnVJdGVtTGlzdChtZW51SXRlbTogTWVudUl0ZW0pe1xyXG4gICAgZm9yICh2YXIgaSA9IHRoaXMubWVudUl0ZW1MaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGlmICh0aGlzLm1lbnVJdGVtTGlzdFtpXS5pZCA9PT0gbWVudUl0ZW0uaWQpIHtcclxuICAgICAgICB0aGlzLm1lbnVJdGVtTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdE1lbnVJdGVtKG1lbnVJdGVtOiBNZW51SXRlbSkge1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcIm1lbnUtYmFyOlNlbGVjdE1lbnVJdGVtXCIpO1xyXG4gICAgdGhpcy5uYXZpZ2F0aW5nVG9NZW51SXRlbSA9IG1lbnVJdGVtO1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShtZW51SXRlbS5yb3V0ZU5hbWUsIG1lbnVJdGVtLnBhcmFtcyk7XHJcbiAgICBjb25zb2xlLmRlYnVnKFwibWVudS1iYXI6U2VsZWN0TWVudUl0ZW0gXCIgKyByZXN1bHQudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVNZW51SXRlbShtZW51SXRlbTogTWVudUl0ZW0pIHtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJtZW51LWJhcjpSZW1vdmVNZW51SXRlbVwiKTtcclxuICAgIC8vIHRoaXMganVzdCBtYXJrcyB0aGUgbWVudSBhcyBkZWxldGVkIGFuZCBcclxuICAgIGZvciAodmFyIGkgPSB0aGlzLm1lbnVJdGVtTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAodGhpcy5tZW51SXRlbUxpc3RbaV0uaWQgPT09IG1lbnVJdGVtLmlkKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGluZ01lbnVJdGVtID0gbWVudUl0ZW07XHJcbiAgICAgICAgLy8gaWYgaXRlbSB0byBkZWxldGUgaXMgdGhlIHNlbGVjdGVkIGl0ZW0gbmVlZCB0byBtb3ZlIG9mZiB0byBhbm90aGVyIHRhYiB0byBjaGVjayBjYW4gZGlzcG9zZS5cclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkTWVudUl0ZW0gIT0gbnVsbCAmJiB0aGlzLmRlbGV0aW5nTWVudUl0ZW0uaWQgIT09IHRoaXMuc2VsZWN0ZWRNZW51SXRlbS5pZCl7XHJcbiAgICAgICAgICB0aGlzLnNwbGljZU1lbnVJdGVtRnJvbU1lbnVJdGVtTGlzdCh0aGlzLmRlbGV0aW5nTWVudUl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyB1c2Ugcm91dGVyIHNlbGVjdGVkIGNvbXBsZXRlIHRvIGNoYW5nZSBtZW51LlxyXG4gICAgICAgICAgaWYgKHRoaXMubWVudUl0ZW1MaXN0Lmxlbmd0aC0xID4gaSkge1xyXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpbmdUb01lbnVJdGVtID0gdGhpcy5tZW51SXRlbUxpc3RbaSsxXTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaT4wKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGluZ1RvTWVudUl0ZW0gPSB0aGlzLm1lbnVJdGVtTGlzdFtpLTFdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKHRoaXMubmF2aWdhdGluZ1RvTWVudUl0ZW0ucm91dGVOYW1lLCB0aGlzLm5hdmlnYXRpbmdUb01lbnVJdGVtLnBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERJRCBGSU5EIElURU0gVE8gREVMRVRFIFNPIGNhbiBicmVhayBvdXQgb2YgZm9yIGxvb3BcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTWVudUl0ZW0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY2FuQ2xvc2U6IGJvb2xlYW47XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICByb3V0ZU5hbWU6IHN0cmluZztcclxuICBwYXJhbXM6IGFueTtcclxuICBhdXRvT3BlbjogYm9vbGVhbjtcclxuICBzZWxlY3RlZDogYm9vbGVhbjtcclxuICBpbnRlcm5hbEhhc2hLZXk6IHN0cmluZztcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('common/menu-item',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MenuItem = (function () {
        function MenuItem() {
        }
        return MenuItem;
    }());
    exports.MenuItem = MenuItem;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9tZW51LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQ0E7UUFBQTtRQU1BLENBQUM7UUFBRCxlQUFDO0lBQUQsQ0FOQSxBQU1DLElBQUE7SUFOWSw0QkFBUSIsImZpbGUiOiJjb21tb24vbWVudS1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBNZW51SXRlbSB7XHJcbiAgY2FuQ2xvc2U6Ym9vbGVhbjtcclxuICB0aXRsZTpzdHJpbmc7XHJcbiAgcm91dGVOYW1lOnN0cmluZztcclxuICBwYXJhbXM6YW55O1xyXG4gIGF1dG9PcGVuOmJvb2xlYW47XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24pIHtcclxuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./common/main-menu\"></require><require from=\"kendo/css/web/kendo.black.css\"></require><require from=\"kendo/css/web/kendo.default.css\"></require><require from=\"kendo/css/web/kendo.common.css\"></require><main-menu></main-menu><router-view></router-view></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><div class=\"col-md-12\"><div class=\"col-md-4\"><div class=\"panel panel-default\"><div class=\"panel-heading\">General Ledger Reports with panel-body</div><div class=\"panel-body\" click.delegate=\"CreatePageOneMenu()\">Chart of Accounts</div><div class=\"panel-body\" click.delegate=\"CreatePageTwoMenu()\">Trial Balance</div><div class=\"panel-body\" click.delegate=\"CreatePageTwoMenu()\">12 Month Actual and/or Budget</div></div></div><div class=\"col-md-4\"><div class=\"panel panel-default\"><div class=\"panel-heading\">General Ledger Reports with panel-body</div><ul class=\"list-group\"><li class=\"list-group-item\" click.delegate=\"CreatePageTwoMenu()\">Cras justo odio</li><li class=\"list-group-item\" click.delegate=\"CreatePageTwoMenu()\">Dapibus ac facilisis in</li><li class=\"list-group-item\" click.delegate=\"CreatePageTwoMenu()\">Morbi leo risus</li><li class=\"list-group-item\" click.delegate=\"CreatePageTwoMenu()\">Porta ac consectetur ac</li><li class=\"list-group-item\" click.delegate=\"CreatePageTwoMenu()\">Vestibulum at eros</li></ul></div></div><div class=\"col-md-4\"><div class=\"panel panel-default\"><div class=\"panel-heading\">General Ledger Settings</div><div class=\"panel-body\" click.delegate=\"CreatePageTwoMenu()\">Report Format List</div></div></div></div></template>"; });
define('text!page-one.html', ['module'], function(module) { module.exports = "<template><require from=\"aurelia-kendoui-bridge/grid/grid\"></require><require from=\"aurelia-kendoui-bridge/grid/col\"></require><require from=\"aurelia-kendoui-bridge/common/template\"></require><h1>page one</h1><br><input type=\"text\" value.bind=\"email\" placeholder=\"Email\"><ak-grid k-data-source.bind=\"datasource\" k-pageable.bind=\"pageable\" k-sortable.bind=\"true\"><ak-col k-title=\"Contact Name\" k-field=\"ContactName\"></ak-col><ak-col k-title=\"Contact Title\" k-field=\"ContactTitle\"></ak-col><ak-col k-title=\"Company Name\" k-field=\"CompanyName\"></ak-col><ak-col k-field=\"Country\"></ak-col></ak-grid></template>"; });
define('text!page-two.html', ['module'], function(module) { module.exports = "<template><h1>Page Two</h1><br><input type=\"text\" value.bind=\"email\" placeholder=\"Email\"></template>"; });
define('text!search-window.html', ['module'], function(module) { module.exports = "<template><h1>search window</h1><br><input type=\"text\" value.bind=\"email\" placeholder=\"Email\"></template>"; });
define('text!common/main-menu.html', ['module'], function(module) { module.exports = "<template><ul class=\"nav nav-tabs\"><li repeat.for=\"menuItem of menuItemList\"><a class=\"list-group-item ${menuItem.selected ? 'active' : ''}\"><span if.bind=\"menuItem.canClose\" class=\"glyphicon glyphicon-remove\" click.delegate=\"removeMenuItem(menuItem)\"></span> <span click.delegate=\"selectMenuItem(menuItem)\">${menuItem.title}</span><br></a></li></ul></template>"; });
//# sourceMappingURL=app-bundle.js.map