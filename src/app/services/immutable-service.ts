import {Subject} from 'rxjs';
import {HttpCollectionStorage} from './storage/http-collection-storage';

export class ImmutableService<T> {
  private data: T[] = null;
  protected storage: HttpCollectionStorage;
  public onChange = new Subject<T[]>();

  constructor() {
  }

  async get(): Promise<T[]> {
    if (this.data === null) {
      this.data = await this.storage.all() as unknown as T[];
    }
    return [...this.data];
  }

  async update(id: string | number, data: T) {
    let updated = false;
    this.data.map((val: any, key) => {
      if (val.id === id) {
        updated = true;
        this.data[key] = data;
        return;
      }
    });
    if (!updated) {
      this.data.push(data);
    }
    const copy = await this.get();
    this.storage.update(id, data).subscribe(_ => {
      this.onChange.next(copy);
    });
  }
}
