import { FlyRocketPowered } from "./methods/Fly/FlyRocketPowered";
import { ModelDuck } from "./ModelDuck";

const modelDuck = new ModelDuck();

console.log('Model Duck');
modelDuck.performQuak();
modelDuck.swim();
modelDuck.display();
modelDuck.performFly();
modelDuck.setFlyBehaviour(new FlyRocketPowered());
modelDuck.performFly();
