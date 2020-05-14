"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.of(1, 2, 3).pipe(operators_1.map(function (x) { return x * x; })).subscribe(function (x) {
    console.log("value is: " + x);
});
