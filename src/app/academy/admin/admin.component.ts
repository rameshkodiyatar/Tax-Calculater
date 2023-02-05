import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  item:any;
  flage:boolean=false;
  constructor(private userData:UserDataService){
    userData.Users().subscribe((data)=>{
      this.item=data;
    })
    // this.item=userData.Users
    this.flage=userData.flage_admin;
  }
  // @Input() item:{"email":string,name:string,offertype:string}[]=[
  //   {email:"rakesh@gmail.com",name:"Rakesh",offertype:"Intership"},
  //   {email:"raj@gmail.com",name:"Raj",offertype:"Intership+Job"},
  //   {email:"viram@gmail.com",name:"Viram",offertype:"Intership"},
  //   {email:"nirav@gmail.com",name:"Nirav",offertype:"Job"},
  //   {email:"riyansh@gmail.com",name:"Riyansh",offertype:"Intership"},
  //   {email:"meru@gmail.com",name:"Meru",offertype:"Intership,Job"},
  //   {email:"virat@gmail.com",name:"Virat",offertype:"Intership"}

  // ]

  AddData(data:any){
    // console.log(item)
    
    this.userData.add(data).subscribe((result)=>{
      console.log(result)
    });
    this.userData.Users().subscribe((data)=>{
      this.item=data;
    })
    // this.item.push(item);
  }

  removeData(key:number){
    // delete this.item[id];
   console.log(key)
   this.userData.RemoveData(key).subscribe((result)=>{
    console.log(result)
    });

    this.userData.Users().subscribe((data)=>{
      this.item=data;
    })
    // this.item.forEach((value:any,index:number)=>{
    //   if(index==key){
    //      this.item.splice(index,1);  
         
    //   }
    // })

    // for (var i = 0; i < this.item.length; i++) {
    //   if (i === key) {
    //       this.item.splice(i,1);
    //   }
    // }
  }

  editData(key:number,str:any){
    //console.log(str.offertype)
    this.userData.EditData(key,str).subscribe((result)=>{
      console.log(result);
    })

    this.userData.Users().subscribe((data)=>{
      this.item=data;
    })

    // this.item.forEach((value:any,index:number)=>{
    //   if(index==key){
    //     value.offertype=str.offertype;
    //   }
    // })
  }
}
