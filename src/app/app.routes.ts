import { Routes } from '@angular/router';
import { EmployeeEditComponent } from './employee/edit/employee-edit/employee-edit.component';
import { EmployeeViewComponent } from './employee/view/employee-view/employee-view.component';

export const routes: Routes = [
  {
    path: 'view',
    component: EmployeeViewComponent,
  },
  {
    path: 'edit',
    component: EmployeeEditComponent,
  },
];
