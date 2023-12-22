import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any = [];
  existProduct: boolean = false;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((productRes) => {
      this.products = productRes;
      console.log(productRes);
    });
  }
  addToCart(product: any): void {
    delete product.id;
    this.productService
      .getProductByName(product.name)
      .subscribe((productRes) => {
        this.existProduct = !!productRes.length;
        if (!this.existProduct) {
          this.productService.addProductToCart(product).subscribe(() => {
            alert('Product Succefully added to Cart!');
          });
        } else {
          alert('Product already exist!');
        }
      });
  }
  showProductDetails(product: any): void {
    console.log(product.name);
    this.router.navigate([product.name], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
