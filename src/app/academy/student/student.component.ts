import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormControl,FormControlName,FormGroup } from '@angular/forms';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  // users:any[]=[
  //   {email:"rakesh@gmail.com",name:"Rakesh",offertype:"Intership"},
  //   {email:"raj@gmail.com",name:"Raj",offertype:"Intership+Job"},
  //   {email:"viram@gmail.com",name:"Viram",offertype:"Intership"},
  //   {email:"nirav@gmail.com",name:"Nirav",offertype:"Job"},
  //   {email:"riyansh@gmail.com",name:"Riyansh",offertype:"Intership"},
  //   {email:"meru@gmail.com",name:"Meru",offertype:"Intership,Job"},
  //   {email:"virat@gmail.com",name:"Virat",offertype:"Intership"}

  // ]
  // typ:boolean=false
  // update(str:any){
  //   if(str.usertype=='Student'){
  //     this.typ=true;
  //   }
    
  // }
  users:any;
  flage:boolean=false;
  constructor(private userData:UserDataService){
    userData.Users().subscribe((data)=>{
      console.log(data)
      this.users=data;
    })
    // this.users=userData.Users;
    this.flage=userData.flage;
  }

  ngOnit(){
    
  }
}
