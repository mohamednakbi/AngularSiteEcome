import { Component, OnInit } from '@angular/core';
//Added
import { Products } from '../core/model/products';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Products;
  constructor() { }

  ngOnInit(): void {
    this.product = new Products();
  }

}
