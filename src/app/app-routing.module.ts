import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:'',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'employees',
    component:EmployeesComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'employees/edit/:id',
    component:EditComponent
  },
{
  path:'**',
  component:AccountComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
