import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/Users"
   
  Users(){
    return this.http.get(this.url)
  }

  // Users:any[]= [
  //     {email:"rakesh@gmail.com",name:"Rakesh",offertype:"Intership"},
  //     {email:"raj@gmail.com",name:"Raj",offertype:"Intership+Job"},
  //     {email:"viram@gmail.com",name:"Viram",offertype:"Intership"},
  //     {email:"nirav@gmail.com",name:"Nirav",offertype:"Job"},
  //     {email:"riyansh@gmail.com",name:"Riyansh",offertype:"Intership"},
  //     {email:"meru@gmail.com",name:"Meru",offertype:"Intership,Job"},
  //     {email:"virat@gmail.com",name:"Virat",offertype:"Intership"}
  
  //   ]
  add(item:any){
    //console.log(item)
   return  this.http.post(this.url,item)
    
   
    // console.log(this.Users)
  }
  RemoveData(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }

  EditData(id:number,data:any){
    //console.log(data)
    return this.http.put(`${this.url}/${id}`,data)
  }

  flage:boolean=false;
  flage_admin:boolean=false;
  
}
