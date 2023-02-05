import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule,Route, Router, ActivatedRoute } from '@angular/router';
import { ChildActivationStart } from '@angular/router';
//import { HeaderComponent } from './E-commerce/header/header.component';
// import { HeaderComponent } from './header/header.component';
import { FormControl,FormControlName,FormGroup } from '@angular/forms';
//import { SellerService } from './E-commerce/seller.service';
//import { UserDataService } from './academy/user-data.service';
import { AppService } from '../app.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  
  constructor(private user:AppService,private router:Router,private route:ActivatedRoute){}  
  //employeeDetails:any;
  employeeDetails:any={
    name:'',
    email:'',
    department:'',
    phone:0,
    salary:0,
  };
  id:any;
  ngOnInit(){
    this.route.paramMap.subscribe({
      next:(params)=>{
        this.id=params.get('id');

        if(this.id){
          this.user.getEmployees(this.id).subscribe({
            next:(response)=>{
              console.log("res");
              console.log(response);
              this.employeeDetails=response;
            }
          })
        }
      }
    })
  }

  store(data:any){
    console.log("store "+data);
    console.log(data);
    console.log(this.id);

    data.id=data.id
    let rupy=data.salary;
    //console.log(data);
    //console.log(rupy);
    if(rupy<=300000){
      data.phone=0;
      data.department=(rupy-data.phone).toString();
    }
    else if (rupy>300000 &&rupy<=600000) {
      data.phone=(((rupy-300000)*5)/100);
      data.department=(rupy-data.phone).toString();
    }
    else if (rupy>600000 &&rupy<=900000) {
      data.phone=(((rupy-600000)*10)/100)+15000;
      data.department=(rupy-data.phone).toString();
    }
    else if (rupy>900000 &&rupy<=1200000) {
      data.phone=(((rupy-900000)*15)/100)+45000;
      data.department=(rupy-data.phone).toString();
    }
    else if (rupy>1200000 &&rupy<=1500000) {
      data.phone=(((rupy-1200000)*20)/100)+90000;
      data.department=(rupy-data.phone).toString();
    }
    else if (rupy>1500000) {
      data.phone=(((rupy-1500000)*30)/100)+150000;
      data.department=(rupy-data.phone).toString();
    }

    this.user.updateEmployee(this.id,data).
    subscribe({
      next:(response)=>{
        console.log(response);
        this.router.navigate(['employees']);
        
      }
    });
  }


  

}
