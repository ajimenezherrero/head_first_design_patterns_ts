import { QuackBehaviour } from "./QuackBehaviour";

export class Squeak implements QuackBehaviour {
  quack() {
    console.log('- This duck can squeak');
  }
}