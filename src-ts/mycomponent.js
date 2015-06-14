if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var tooltip_1 = require('tooltip');
var github_service_1 = require('github.service');
var MyComponent = (function () {
    function MyComponent(github) {
        var _this = this;
        this.message = 'World';
        this.foo = 'bar';
        setTimeout(function () { return _this.message = 'Angular-tips'; }, 1000);
        this.github = github;
        // this.name;
        // this.rate;
    }
    MyComponent.prototype.fetch = function () {
        this.users = this.github.getUsersSync();
        // this.github.getUsers().then((users: any) => {
        //   this.users = users;
        // });
    };
    MyComponent.prototype.works = function () {
        alert('this works!');
    };
    MyComponent = __decorate([
        angular2_1.Component({
            selector: 'my-component',
            appInjector: [github_service_1.GithubNames]
        }),
        angular2_1.View({
            templateUrl: 'mycomponent.html',
            directives: [tooltip_1.Tooltip, angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [github_service_1.GithubNames])
    ], MyComponent);
    return MyComponent;
})();
exports.MyComponent = MyComponent;
//# sourceMappingURL=mycomponent.js.map