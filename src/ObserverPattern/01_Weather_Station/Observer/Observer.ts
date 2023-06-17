export abstract class Observer {
  public name: string;

  constructor(name: string) {
    this.name = name
  }

  abstract update(
    temp: number,
    humidity: number,
    pressure:number,
  ): void
}