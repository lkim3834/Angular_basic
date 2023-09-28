"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var likeComponent = new like_component_1.LikeComponent(10, true);
likeComponent.count = 2;
likeComponent.likeOn = false;
likeComponent.onClick();
console.log("".concat(likeComponent.count, " is count, ").concat(likeComponent.likeOn, " is likeOn"));
