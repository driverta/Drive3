"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var tabs_component_1 = require("./tabs.component");
var stats_component_1 = require("./stats.component");
var set_component_1 = require("./set.component");
var history_component_1 = require("./history.component");
var stacks_component_1 = require("./stacks.component");
var pumps_component_1 = require("./pumps.component");
var challenges_component_1 = require("./challenges.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            app_component_1.AppComponent,
            tabs_component_1.TabsComponent,
            stats_component_1.StatsComponent,
            set_component_1.SetComponent,
            history_component_1.HistoryComponent,
            stacks_component_1.StacksComponent,
            pumps_component_1.PumpsComponent,
            challenges_component_1.ChallengesComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map