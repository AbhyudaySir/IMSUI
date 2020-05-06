import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './components/dashboard/dashboard.component'
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  {path:"",redirectTo:"/userHome",pathMatch:"full"},
  {path:"userHome",component:UserHomeComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutes=[DashboardComponent,UserHomeComponent];