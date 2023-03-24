import { Duck } from "./Duck";
import { FlyDoNothing } from './methods/Fly/FlyDoNothing';
import { MuteQuack } from './methods/Quack/MuteQuack';

export class DecoyDuck extends Duck {
  constructor() {
    super(new FlyDoNothing(), new MuteQuack());
  }

  display() {
    console.log('- Looks like a decoy duck');
  }
}