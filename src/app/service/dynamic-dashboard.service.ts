import { Injectable } from '@angular/core';
import { DashBoardLayout } from "../element/dashboard-layout";

@Injectable({
  providedIn: 'root',
})
export class DynamicDashboardService {
  dashboardLayout: Array<DashBoardLayout> = new Array();
}