import { LikeComponent } from "./like.component";

let likeComponent = new LikeComponent(10, true);

likeComponent.count = 2;
likeComponent.likeOn = false;
likeComponent.onClick();
console.log(`${likeComponent.count} is count, ${likeComponent.likeOn} is likeOn`);
