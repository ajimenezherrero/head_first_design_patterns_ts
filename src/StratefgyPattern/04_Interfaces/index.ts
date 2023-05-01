import { DecoyDuck } from "./DecoyDuck";
import { MallardDuck } from "./MallardDuck";
import { RedheadDuck } from "./RedheadDuck";
import { RubberDuck } from "./RubberDuck";

const mallardDuck = new MallardDuck();
const redheadDuck = new RedheadDuck();
const rubberDuck = new RubberDuck();
const decoyDuck = new DecoyDuck();

console.log('Mallard Duck');
mallardDuck.performQuak();
mallardDuck.swim();
mallardDuck.display();
mallardDuck.performFly();

console.log('Redhead Duck');
redheadDuck.performQuak();
redheadDuck.swim();
redheadDuck.display();
redheadDuck.performFly();

console.log('Rubber Duck');
rubberDuck.performQuak();
rubberDuck.swim();
rubberDuck.display();
rubberDuck.performFly();

console.log('Decoy Duck');
decoyDuck.performQuak();
decoyDuck.swim();
decoyDuck.display();
decoyDuck.performFly();
