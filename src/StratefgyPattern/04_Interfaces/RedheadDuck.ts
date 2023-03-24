import { Duck } from "./Duck";
import { FlyWithWings } from "./methods/Fly/FlyWithWings";
import { Quack } from "./methods/Quack/Quack";

export class RedheadDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }
  display() {
    console.log('- Looks like a redhead');
  }
}