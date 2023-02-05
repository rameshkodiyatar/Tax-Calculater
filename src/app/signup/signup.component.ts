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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private user:AppService,private router:Router,private route:ActivatedRoute){}  
  
  flage=this.user.AddData_flage;

  ngOnInit():void{
    if(!this.flage){
      
      this.router.navigate(['account']);
    }
  }

  store(data:any){
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
    
    this.user.addData(data).subscribe((result)=>{
      console.log(result);
      if(result){
        localStorage.setItem("User",JSON.stringify(result));
        this.router.navigate(['login']);
        
      }
    })
    
  }
}
