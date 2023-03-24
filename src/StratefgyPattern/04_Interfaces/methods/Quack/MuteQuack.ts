import { QuackBehaviour } from "./QuackBehaviour";

export class MuteQuack implements QuackBehaviour {
  quack() {
    console.log('- This duck can\'t quak');
  }
}