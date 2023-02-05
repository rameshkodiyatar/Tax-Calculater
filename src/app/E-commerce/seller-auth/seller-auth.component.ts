import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../seller.service';
import { login, signup } from 'src/app/datatype';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent  implements OnInit{

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
