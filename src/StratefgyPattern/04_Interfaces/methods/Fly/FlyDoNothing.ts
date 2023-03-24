import { FlyBehaviour } from "./FlyBehaviour";

export class FlyDoNothing implements FlyBehaviour {
  fly() {
    console.log('- This duck can\'t fly');
  }
}