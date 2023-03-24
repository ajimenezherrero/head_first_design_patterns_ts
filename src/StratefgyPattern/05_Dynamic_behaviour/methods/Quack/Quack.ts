import { QuackBehaviour } from "./QuackBehaviour";

export class Quack implements QuackBehaviour {
  quack() {
    console.log('- This duck can quak');
  }
}