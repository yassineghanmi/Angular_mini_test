import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(product: any): Observable<any> {
    return this.http.post('http://localhost:3000/products', product);
  }
  getProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products');
  }
  addProductToCart(product: any): Observable<any> {
    return this.http.post('http://localhost:3000/cart', product);
  }
  getCartProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/cart');
  }
  getProductByName(productName: String): Observable<any> {
    return this.http.get(`http://localhost:3000/cart?name=${productName}`);
  }
  getProductByNameProduct(productName: String): Observable<any> {
    return this.http.get(`http://localhost:3000/products?name=${productName}`);
  }
}
