import { Component } from '@angular/core';
import { AppRoutingModule} from '../app-routing.module';
import { RouterModule,Router } from '@angular/router';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // loginForm=new FormGroup({
  //   email:new FormControl('',[Validators.required,Validators.email]),
  //   password:new FormControl('',[Validators.required])
  // })
  constructor(private user:AppService,private http:HttpClient,private router:Router){}

//   const vairable = [{key1: "value1"}, {key2: "value2"}]
// Object.keys(vairable).forEach((i: any) => {
//     console.log(i); # get 0 and 1, I would like to have key1, key2
// });

  email_mahiti=this.user.ref_email
  mahiti:any;

  flage=this.user.useData_flage;

  
  ngOnInit():void{

    if(!this.flage){
      
      this.router.navigate(['account']);
    }

    this.user.getAllEmployees().subscribe({
      next:(employees:any)=>{
        console.log("userdata");
        console.log(employees);
        console.log(this.email_mahiti);

        this.mahiti=employees;
        console.log(this.mahiti);
      },
      error:(response:any)=>{
        console.log(response);
      }
    })
  }

  check(info:any){
    
  }

 
}
