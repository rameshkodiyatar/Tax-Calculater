import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from './student/student.component'
import {AdminComponent} from './admin/admin.component'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AcademyRoutingModule { }
