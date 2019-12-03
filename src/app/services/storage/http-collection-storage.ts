import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpCollectionStorage {
  private url: string;

  constructor(private http: HttpClient) {
    console.log('http collection', this.http);
  }

  public setUrl(url: string) {
    this.url = url;
  }

  public getInstance(url: string): HttpCollectionStorage {
    const instance = new HttpCollectionStorage(this.http);
    instance.setUrl(url);
    return instance;
  }


  async all() {
    return this.http.get(this.fullUrl);
  }

  get fullUrl(): string {
    return this.url;
  }

  public update(id: string | number, data: any) {
    return this.http.post(this.fullUrl, data);
  }
}
