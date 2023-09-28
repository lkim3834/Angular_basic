"use strict";
// import { CourseComponent } from './../course/course.component';
// import { Component } from '../Angular_basic/@angular/core;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
// @Component({
//   selector: 'app-like',
//   templateUrl: './like.component.html',
//   styleUrls: ['./like.component.css']
// })
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_count, _likeOn) {
        this._count = _count;
        this._likeOn = _likeOn;
    }
    LikeComponent.prototype.onClick = function () {
        this._count += this._likeOn ? 1 : -1;
        this._likeOn = !this._likeOn;
    };
    Object.defineProperty(LikeComponent.prototype, "likeOn", {
        get: function () {
            return this._likeOn;
        },
        set: function (value) {
            this._likeOn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: false,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
