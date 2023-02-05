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
import { login,signup } from '../datatype';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  // constructor(private user:AppService,private router:Router){}  

  // email:string[]=[]
  // password:string[]=[]

  // store(data:any){
  //   data.id=data.id
  //   this.user.storage(data).subscribe((result)=>{
  //     console.log(result);
  //   })
  //    this.router.navigate(['login']);
  // }

  constructor(private seller:AppService,private router:Router){}
  showlogin=false;
  authError=''
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data:signup):void{
    console.log(data);
    
    this.seller.userSignUp(data)
  }

  login(data:login):void{
    //console.log(data);
    this.authError=''
    this.seller.userlogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
          this.authError='Email or password is not correct'
      }
      
      
    })
  }

  

  openLogin(){
    this.showlogin=true;
  }

  openSignup(){
    this.showlogin=false;
  }

}
