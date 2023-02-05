import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule,Route, Router } from '@angular/router';
import { ChildActivationStart } from '@angular/router';
//import { HeaderComponent } from './E-commerce/header/header.component';
// import { HeaderComponent } from './header/header.component';
import { FormControl,FormControlName,FormGroup } from '@angular/forms';
//import { SellerService } from './E-commerce/seller.service';
//import { UserDataService } from './academy/user-data.service';
import { AppService } from './app.service';
//import {NgForm} form '@angular/forms';
@Component({
  selector: 'app-root',
  // template:`
  //   <div> hiten123456789 </div>
  // `,
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'blog'; 
// displayValue=''
// getValue(val:string){
//   this.displayValue=val
// }   
// num=0
// name='Ramesh'
// counter(str:string){
//   str=='+'? this.num++ :this.num--
// }

// show=true;

// color='white';

// // user=['ram','a','b','c']
// data:any={}
// getData(data:any){
//   console.log(data)
//   this.data=data
// }

// display=true;
// toggle(){
// this.display=!this.display
// }
// list:any[]=[]
// addTask(data:any){
//   this.list.push({id:this.list.length,name:data})

// }

// remove(id:number){
//   this.list=this.list.filter(data=>data.id!==id) 
// }

// Data=10;

// updateChild(){
//   this.Data=Math.floor(Math.random()*10)
// }

// userDetails=[
//   {name:'Raj',email:"dssd@xxat.com"},
//   {name:'Raj',email:"dssd@xxat.com"},
//   {name:'Raj',email:"dssd@xxat.com"},
//   {neme:'Raj',email:"dssd@xxat.com"}
// ]

// UpdateData(item:any){
//   console.log(item)
// }


// Name:any;

// GetValue(item:any){
//   console.log(item)
// }

// dete=Date()

// userlogin(item:any){
//   console.log(item)
// }

// loginForm= new FormGroup({
//   user:new FormControl(''),
//   password:new FormControl('')
// })

constructor(private user:AppService,private router:Router){}  
flage=true;
store(data:any){
  data.id=data.id
  this.user.addData(data).subscribe((result)=>{
    console.log(result);
    if(result){
      localStorage.setItem("User",JSON.stringify(result));
      this.router.navigate(['login']);
      
    }
  })
  this.flage=false
}




toggle(){
  this.flage=false;
}
 

}
 