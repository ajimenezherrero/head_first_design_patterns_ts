import { FlyBehaviour } from "./FlyBehaviour";

export class FlyNoWay implements FlyBehaviour {
  fly() {
    console.log('- This duck can\'t fly');
  }
}