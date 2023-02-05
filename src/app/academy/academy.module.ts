import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcademyRoutingModule } from './academy-routing.module';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StudentComponent,
    AdminComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    AcademyRoutingModule,
    FormsModule,
    HttpClientModule 
  ]
})
export class AcademyModule { }
