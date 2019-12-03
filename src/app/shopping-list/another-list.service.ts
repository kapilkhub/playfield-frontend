import {HttpCollectionStorage} from '../services/storage/http-collection-storage';
import {Injectable} from '@angular/core';
@Injectable()
export class AnotherListService {
  private storage: HttpCollectionStorage;
  constructor(collectionStorage: HttpCollectionStorage) {
    this.storage = collectionStorage.getInstance('blablub');
  }
}
