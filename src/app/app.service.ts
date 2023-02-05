import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { login, signup } from 'src/app/datatype';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  //flage=new BehaviorSubject<boolean>(false);

  useData_flage :boolean=false;
  AddData_flage :boolean=false;
  addmin_flage :boolean=false;

  Employees:any[]=[]

  ref_email:string=''

  u='http://localhost:3000/Data';

  url:string=environment.baseApiUrl;
  //'https://localhost:7034/api/'
  constructor(private http:HttpClient,private router:Router) { }
  
  storage(item:any){
    return this.http.post(this.u,item);
    // .subscribe((result)=>{
      
    //   localStorage.setItem('user',JSON.stringify(result.body));

    
  }

  GetInfo(){
    return this.http.get(this.url+'/api/employees');
   }

  getAllEmployees(){
    return this.http.get(this.url+'/api/employees');
  }

  addData(data:any){
    this.useData_flage=true;
    this.ref_email=data.email;
   return this.http.post(this.url+'/api/employees',data);
    // this.router.navigate(['login'])
  }

  getEmployees(id:string){
   return  this.http.get(this.url+'/api/employees/'+id);
  }

  updateEmployee(id:string,updateEmployeeRequest:any){
    console.log("updateemploye "+updateEmployeeRequest);
    return this.http.put(this.url+'/api/employees/'+id,updateEmployeeRequest);
  }

  deleteEmployee(id:string){
    console.log("fromservice"+id);
   return this.http.delete(this.url+'/api/employees/'+id);
  }

//seller
isSellerloggedin=new BehaviorSubject<boolean>(false);
isLoginError=new EventEmitter<boolean>(false)

//constructor(private http:HttpClient,private router:Router) { }

Url="http://localhost:3000/seller"

userSignUp(data:signup){
  //data.id=Math.floor(Math.random()*20000);
   this.http.post(this.Url,data,{observe:'response'}).subscribe((result)=>{
    this.isSellerloggedin.next(true);
    localStorage.setItem('seller',JSON.stringify(result.body))
    this.AddData_flage=true;
    if(data.email=="admin@gmail.com"){
      this.addmin_flage=true;
      this.router.navigate(['employee'])
    }
    else
    this.router.navigate(['signup'])
    
  });

}

reloadSeller(){
  if(localStorage.getItem('seller')){
    this.isSellerloggedin.next(true);
    //this.router.navigate(['login'])
  }
}

userlogin(data:login){
   
  this.http.get(this.Url+"?email=" + data.email + '&password=' + data.password ,
  {observe:'response'}).subscribe((result:any)=>{
    console.log(result)

    if(result&&result.body &&result.body.length){
      console.log("user logged in")
      console.log(data.email)
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.ref_email=data.email;
      this.useData_flage=true;
      if(data.email=="admin@gmail.com"){
        this.addmin_flage=true;
        this.useData_flage=false;
        this.router.navigate(['employee'])
      }
      else
      this.router.navigate(['login'])
      
    }
    else{
      console.log("login failed");
      this.isLoginError.emit(true);
    }
  })
}
  
}
