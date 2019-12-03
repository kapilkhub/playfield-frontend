import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ParentExtentService<T> {
  protected array: T[];
  public arrayChanged = new Subject<T[]>();

  protected constructor() {
  }

  getArray(): T[] {
    if (this.array) {
      return [...this.array];
    }
  }

  addToArray(object: T) {
    this.array.push(object);
    this.arrayChanged.next([...this.array]);
  }

}
