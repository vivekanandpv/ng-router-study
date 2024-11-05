import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private scoreSubject = new BehaviorSubject<number>(0);

  constructor() {}

  get score$() {
    return this.scoreSubject.asObservable();
  }

  incrementScore() {
    this.scoreSubject.next(this.scoreSubject.value + 1);
  }
}
