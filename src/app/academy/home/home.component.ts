import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormControl,FormControlName,FormGroup } from '@angular/forms';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  flage:boolean=false;
  flage_admin:boolean=false;
  constructor(private userData:UserDataService){
    this.flage=userData.flage
  }

  getData(item:any){
    if(item.usertype=='Student'){
      this.userData.flage=true;
      this.userData.flage_admin=false;
      alert("You can access Student page")
    }
    else if(item.usertype=='Admin'){
      this.userData.flage_admin=true;
      this.userData.flage=false;
      alert("You can access Admin page")
    }
    
  }

  // @Output() updateDataEvent=new EventEmitter<string>();

}
