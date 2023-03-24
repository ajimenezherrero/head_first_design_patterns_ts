import { Duck } from "./Duck";
import { FlyDoNothing } from "./methods/Fly/FlyDoNothing";
import { Squeak } from "./methods/Quack/Squeak";

export class RubberDuck extends Duck {
  constructor() {
    super(new FlyDoNothing(), new Squeak());
  }

  display() {
    console.log('- Looks like a rubber');
  }
}