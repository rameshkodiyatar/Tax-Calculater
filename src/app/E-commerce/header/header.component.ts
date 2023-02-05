import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menutype:string='default'
  sellerName=''
  constructor(private route:Router){}

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menutype='seller'

          let sellerStore=localStorage.getItem('seller');
          let sellerData=sellerStore &&JSON.parse(sellerStore)[0]
          this.sellerName=sellerData.name
        }
        else{
          this.menutype='default'
        }
      }
      console.log(val.url);
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

}
