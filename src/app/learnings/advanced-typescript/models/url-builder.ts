import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  get finalUrl() {
    return '';
  }

  getAllEntries() {
    return this.http.get(this.finalUrl);
  }

  getEntryById(id) {
    return this.http.get(this.finalUrl + '/' + id);
  }

}

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

}

@Injectable({
  providedIn: 'root'
})
export class DashboardWidgetService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
}

@Injectable({
  providedIn: 'root'
})
export class DatasourceService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
}

@Injectable({
  providedIn: 'root'
})
export class DatasourceTableService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
}


@Component({
  selector: 'app-url-text',
  template: ``
})
export class UrlTestComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              private dashboardWidgetService: DashboardWidgetService,
              private datasourceService: DatasourceService,
              private datasourceTableService: DatasourceTableService) {
  }

  ngOnInit(): void {

  }

  getAllDashoards() {

  }

  getDashboardById(id: unknown) {

  }

  getAllDashoardWidgets() {

  }

  getDashoardWidgetById(id: unknown) {

  }

  getAllDatasources() {

  }

  getDatasourcesById(id: unknown) {

  }

  getAllDatasourceTables() {

  }

  getDatasourceTableById(id: unknown) {

  }

}
