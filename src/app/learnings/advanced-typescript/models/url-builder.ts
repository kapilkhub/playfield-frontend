import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, publish, refCount } from 'rxjs/operators';

// https://y42.com/dashboard/api/dashboards
// https://y42.com/dashboard/api/dashboards/{id: string}

// https://y42.com/dashboard/api/dashboards/{id: string}/widgets
// https://y42.com/dashboard/api/dashboards/{id: string}/widgets/{id: string}


// https://y42.com/datasource/api/datasources
// https://y42.com/datasource/api/datasources/{id: number}

// https://y42.com/datasource/api/datasources/{id: number}/tables
// https://y42.com/datasource/api/datasources/{id: number}/tables/{id: number}


@Injectable({
  providedIn: 'root'
})
export class BaseService {


  constructor(private http: HttpClient) {

  }

  get finalUrl(): string {
    return '';
  }

  getAllEntries<T>() {  /* T Extends SomeType can apply constarint on T if I can view the output */
    return this.http.get<T>(this.finalUrl).pipe(
      catchError(this.handleError),
    );
  }


  getEntryById<T>(id: string | number) {   /* T Extends SomeType can apply constarint on T if I can view the output */
    let queryParam: string;
    if (typeof id == "number") {
      queryParam = id.toString();
    }
    else {
      queryParam = id;
    }
    return this.http.get<T>(this.finalUrl + '/' + id).pipe(
      catchError(this.handleError),
    );
  }

  private handleError(error: any): Observable<never> {
    return throwError(error); // handle error here properly, we can show the popup or toast.
  }


}

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get finalUrl(): string {
    return "https://y42.com/dashboard/api/dashboards";
  }

  getAllEntries<T>(): Observable<T> {
    return super.getAllEntries<T>();
  }

  getEntryById<T>(id: string | number): Observable<T> {
    return super.getEntryById<T>(id);
  }

}

@Injectable({
  providedIn: 'root'
})
export class DashboardWidgetService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  private _finalUrl: string;
  get finalUrl() {
    return this._finalUrl;
  }


  set finalUrl(id: string) {
    this._finalUrl = `https://y42.com/dashboard/api/dashboards/${id}/widgets`
  }


  getWidgetById<T>(id: string): Observable<T> {
    this.finalUrl = id;
    return super.getAllEntries();
  }

  getEntryById<T>(id: string | number): Observable<T> {
    this.finalUrl = "some-dashboard-id";  //again not sure from where I will get the dashboard id, therefore hardcoading
    return super.getEntryById(id)
  }

}

@Injectable({
  providedIn: 'root'
})
export class DatasourceService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get finalUrl(): string {
    return "https://y42.com/datasource/api/datasources";
  }

  getAllEntries<T>(): Observable<T> {
    return super.getAllEntries<T>();
  }

  getEntryById<T>(id: string | number): Observable<T> {
    return super.getEntryById<T>(id);
  }


}

@Injectable({
  providedIn: 'root'
})
export class DatasourceTableService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  private _finalUrl: string;
  get finalUrl() {
    return this._finalUrl;
  }


  set finalUrl(id: string) {
    this._finalUrl = `https://y42.com/datasource/api/datasources/${id}/tables`
  }


  getDatasourceByTableId<T>(id: number): Observable<T> {
    if (!id) {
      throw new Error("Id required");
    }
    this.finalUrl = id.toString();
    return super.getAllEntries();
  }

  getEntryById<T>(id: string | number): Observable<T> {
    this.finalUrl = "some-table-id";  //again not sure from where I will get the table id, therefore hardcoading
    return super.getEntryById(id)
  }


}


@Component({
  selector: 'app-url-text',
  template: ``
})
export class UrlTestComponent implements OnInit, OnDestroy {

  constructor(private dashboardService: DashboardService,
    private dashboardWidgetService: DashboardWidgetService,
    private datasourceService: DatasourceService,
    private datasourceTableService: DatasourceTableService) {
  }
  subscription: Subscription = new Subscription();

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); //needed since change detection strategy is Default
    }
  }

  ngOnInit(): void {

  }

  getAllDashoards() {
    this.subscription.add(this.dashboardService.getAllEntries().pipe(
    ).subscribe())

  }

  getDashboardById(id: any) { // please fix any
    this.subscription.add(this.dashboardService.getEntryById(id).pipe(
      publish(),
      refCount()
    ).subscribe())
  }

  getAllDashoardWidgets() {
    /*not sure how will i get dashboard Id for the widget. may be from the input but given method 
     definition and base class method definition does not suggest that there is any widget input. 
     So I believe, I need to use map to get all widgets of all dashboard. 
     may be something like this 
      return this.getAllDashoards().pipe(
       mergeMap( (dashboard: any) => this.dashboardWidgetService.getWidgetById(dashboard.id)));
    */

    /* this code is written, asuming we are getting id anyway .. somehow in the code  didnot like that I have to write new method
    but new method is anyway using base class implementation.
    */
    this.subscription.add(this.dashboardWidgetService.getWidgetById("some-id-from-ui").subscribe());

  }

  getDashoardWidgetById(id: string) { // please fix any
    this.subscription.add(this.dashboardWidgetService.getEntryById(id).subscribe())
  }

  getAllDatasources() {
    this.subscription.add( this.datasourceService.getAllEntries().subscribe());

  }

  getDatasourcesById(id: number) { // please fix any
    this.subscription.add(this.datasourceService.getEntryById(id).subscribe());
  }

  getAllDatasourceTables() {
    /**here also same as widgets. therefore hardocoding the widgetId. I do not like that I had to create a new method. 
      may be a little more clarity help  
      */
      this.subscription.add(this.datasourceTableService.getDatasourceByTableId(123).subscribe());
  }

  getDatasourceTableById(id: number) { // please fix any

    this.subscription.add( this.datasourceTableService.getEntryById(id).subscribe());
  }

}
