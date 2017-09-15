"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var StatsComponent = (function () {
    function StatsComponent() {
        this.exercise = "Bench";
        this.sgains = 1000;
        this.xgains = 2000;
        this.srecords = 10;
        this.xrecords = 20;
        this.schallenges = 1;
        this.xchallenges = 2;
        this.ssets = 20;
        this.xsets = 40;
        this.sreps = 200;
        this.xreps = 400;
        this.sweight = 500;
        this.xweight = 1000;
        this.soneRM = 225;
        this.xoneRM = 1000;
    }
    return StatsComponent;
}());
StatsComponent = __decorate([
    core_1.Component({
        selector: 'my-stats',
        templateUrl: './stats.component.html',
        styleUrls: ['./stats.component.css'],
    })
], StatsComponent);
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=stats.component.js.map