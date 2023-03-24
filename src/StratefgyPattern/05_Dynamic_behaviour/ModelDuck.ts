import { Duck } from "./Duck";
import { FlyNoWay } from "./methods/Fly/FlyNoWay";
import { Quack } from "./methods/Quack/Quack";

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }
  display() {
    console.log('- Looks like a mallard');
  }
}