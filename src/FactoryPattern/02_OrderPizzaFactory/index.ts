import { PizzaStore } from './PizzaStore';
import { PizzaTypes, SimplePizzaFactory } from './SimplePizzaFactory';

const pizzaFactory = new SimplePizzaFactory();
const pizzaStore = new PizzaStore(pizzaFactory)
const pizza = pizzaStore.orderPizza(PizzaTypes.cheese);
console.log('🚀 ~ file: index.ts:5 ~ pizza:', pizza);
