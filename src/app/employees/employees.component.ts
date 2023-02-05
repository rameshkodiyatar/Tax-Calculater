import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule,Route, Router } from '@angular/router';
import { ChildActivationStart } from '@angular/router';
//import { HeaderComponent } from './E-commerce/header/header.component';
// import { HeaderComponent } from './header/header.component';
import { FormControl,FormControlName,FormGroup } from '@angular/forms';
//import { SellerService } from './E-commerce/seller.service';
//import { UserDataService } from './academy/user-data.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  constructor(private user:AppService,private router:Router){}  

  Empl:any[]=this.user.Employees;

  flage:boolean=this.user.addmin_flage;

  ngOnInit():void{

    if(this.flage==false){
      this.router.navigate(['account']);
    }
    
    this.user.getAllEmployees().subscribe({
      next:(employees:any)=>{
        console.log(employees);
        this.Empl=employees;
      },
      error:(response:any)=>{
        console.log(response);
      }
    })
    
  }

 // Empl:any[]=this.user.Employees;

  editdata(key:any){
    
    this.router.navigate(['edit']);
  }

  deletedata(id:string){
    // deleteEmployee(id:string){
      console.log("Hello"+id);
      this.user.deleteEmployee(id).subscribe({
        next:(response)=>{
        console.log(response);
        this.router.navigate(['employees']);
        }
      })
    
  }

  
}
