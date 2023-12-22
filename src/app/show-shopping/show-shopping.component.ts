import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-show-shopping',
  templateUrl: './show-shopping.component.html',
  styleUrls: ['./show-shopping.component.css'],
})
export class ShowShoppingComponent implements OnInit {
  productsInCart: any = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getCartProducts()
      .subscribe((productsRes) => (this.productsInCart = productsRes));
  }
}
