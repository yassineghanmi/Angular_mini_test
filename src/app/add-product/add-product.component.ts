import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private productService: ProductService) {}

  onSubmit(formRef: NgForm): void {
    console.log(formRef.value);
    this.productService.addProduct(formRef.value).subscribe(() => {
      alert('Product Succefully added');
    });
  }
}
