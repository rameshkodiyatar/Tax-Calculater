 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { AppComponent } from './app.component';
 import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule,FormControl } from '@angular/forms';
 import { AppService } from './app.service';
 import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { EditComponent } from './edit/edit.component';
// import {}

@NgModule({
  declarations: [AppComponent, LoginComponent, EmployeesComponent, SignupComponent, AccountComponent, EditComponent],
  imports: [
     CommonModule,
     BrowserModule,
     FormsModule,
     HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
