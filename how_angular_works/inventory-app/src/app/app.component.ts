import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products: Product[];

  constructor(){
    this.products = [new Product('MYSHOES',
                                'Black running shoes',
                                '/resources/images/products/black-shoes.jpg',
                                ['Men','Shoes','Running Shoes'],
                                109.99),
                    new Product('NEATOJACKET',
                                'Blue Jacket',
                                '/resources/images/products/black-jacket.jpg',
                                ['Women','Apparel','Jackets & Vests'],
                                10.99),
                    new Product('NICHEHAT',
                                'A nice black hat',
                                '/resources/images/products/black-hat.jpg',
                                ['Men','Accessories','Hats'],
                                9.99)

    ];
  }

  productWasSelected(product: Product): void{
    console.log('Product clicked: ', product);
  }
}
