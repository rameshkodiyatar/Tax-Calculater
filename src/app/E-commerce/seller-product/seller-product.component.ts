import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-product',
  templateUrl: './seller-product.component.html',
  styleUrls: ['./seller-product.component.css']
})
export class SellerProductComponent {
    addproduct(data:any){
      console.log(data);
    }
}
