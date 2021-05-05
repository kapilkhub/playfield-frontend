import {Component, Injectable, OnInit} from '@angular/core';

// https://y42.com/dashboard/api/company/{id}/dashboards
// https://y42.com/dashboard/api/company/{id}/dashboards/{id}

// https://y42.com/dashboard/api/company/{id}/dashboards/{id}/widgets
// https://y42.com/dashboard/api/company/{id}/dashboards/{id}/widgets/{id}


// https://y42.com/datasource/api/datasources
// https://y42.com/datasource/api/datasources/{id}


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() {

  }

  getAllEntries() {

  }

  getEntryById() {

  }

}

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

}

@Injectable({
  providedIn: 'root'
})
export class DashboardWidgetService extends BaseService {

}


@Injectable({
  providedIn: 'root'
})
export class DatasourceService extends BaseService {

}


@Component({
  selector: 'app-url-text',
  template: `
    <div></div>
  `
})
export class UrlTestComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              private dashboardWidgetService: DashboardWidgetService,
              private datasourceService: DatasourceService) {
  }

  ngOnInit(): void {

  }

  getDashoards() {

  }

  getDashoardWidgets() {

  }

  getDatasources() {

  }

}
