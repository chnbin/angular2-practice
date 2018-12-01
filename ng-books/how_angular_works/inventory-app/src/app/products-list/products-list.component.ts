import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  inputs: ['productList'],
  outputs: ['onProductWasSelected'],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  productList: Product[];
  onProductWasSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() { 
    this.onProductWasSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  isSelected(product: Product): void{
    this.currentProduct = product;
    this.onProductWasSelected.emit(product);
  }

  clicked(product: Product): boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
