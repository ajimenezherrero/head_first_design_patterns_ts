export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[];

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    console.log('Tossing dough...');
    console.log('Adding sauce...');
    console.log('Adding toppings:');
    this.toppings.forEach(topping => {
      console.log(` ${topping}`)
    })
    
  }
  bake(): void {
    console.log('Bake for 25 minutes at 350');
  }
  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }
  box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  public getName(): string {
    return this.name;
  }
}