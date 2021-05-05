// https://y42.com/dashboard/api/company/{id}/dashboards
// https://y42.com/dashboard/api/company/{id}/dashboards/{id}

// https://y42.com/dashboard/api/company/{id}/dashboards/{id}/widgets
// https://y42.com/dashboard/api/company/{id}/dashboards/{id}/widgets/{id}


// https://y42.com/datasource/api/datasources
// https://y42.com/datasource/api/datasources/{id}

import {Injectable} from '@angular/core';

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
