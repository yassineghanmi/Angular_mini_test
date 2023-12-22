import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  productName: String = '';
  productDescription: String = '';
  constructor(
    private route: ActivatedRoute,

    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ name }) => {
      this.productName = name;
      this.productService
        .getProductByNameProduct(this.productName)
        .subscribe(
          (product) => (this.productDescription = product[0].description)
        );
    });
  }
}
