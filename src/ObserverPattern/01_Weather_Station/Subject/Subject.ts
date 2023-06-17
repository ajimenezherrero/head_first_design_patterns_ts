import { Observer } from '../Observer/Observer';

export abstract class Subject {
  abstract registerObserver(obs: Observer): void
  abstract removeObserver(obs: Observer): void
  abstract notifyObservers(): void
}