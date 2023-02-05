import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signup } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import {EventEmitter} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerloggedin=new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false)
  
  constructor(private http:HttpClient,private router:Router) { }

  url="http://localhost:3000/seller"

  userSignUp(data:signup){
    //data.id=Math.floor(Math.random()*20000);
     this.http.post(this.url,data,{observe:'response'}).subscribe((result)=>{
      this.isSellerloggedin.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
      
    });

  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerloggedin.next(true);
      this.router.navigate(['seller-home'])
    }
  }

  userlogin(data:login){
     
    this.http.get(this.url+"?email=" + data.email + '&password=' + data.password ,
    {observe:'response'}).subscribe((result:any)=>{
      console.log(result)

      if(result&&result.body &&result.body.length){
        console.log("user logged in")
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
      }
      else{
        console.log("login failed");
        this.isLoginError.emit(true);
      }
    })
  }
}
