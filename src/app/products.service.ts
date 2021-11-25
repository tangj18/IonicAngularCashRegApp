import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private products : Product[] = [{
    name: "Hoodie",
    quantity: 20,
    price: 45.99,
    isSelected: false
  }, {
    name: "Jacket",
    quantity: 12,
    price: 39.99,
    isSelected: false
  }, {
    name: "Joggers",
    quantity: 25,
    price: 35.99,
    isSelected: false
  }, {
    name: "Tshirt",
    quantity: 29,
    price: 24.99,
    isSelected: false
  }, {
    name: "Socks",
    quantity: 16,
    price: 7.99,
    isSelected: false
  }, {
    name: "Beanie",
    quantity: 40,
    price: 5.99,
    isSelected: false
  }
  ];

  getAllProducts(){
    return [...this.products];
  }

  updateQuantity(item: Product, quant: number){
    console.log(item.name + item.price + item.quantity + quant);
    let index = this.products.indexOf(item);
    item.quantity = item.quantity - quant;
    this.products[index] = item;

    console.log(item);
  }

  restockQuantity(item: Product, quant: number){
    let index = this.products.indexOf(item);
    item.quantity = item.quantity + quant;
    this.products[index] = item;
  }

  setTrue(item: Product){
    let index = this.products.indexOf(item);
    item.isSelected = true;
    this.products[index] = item;
  }

  setAllFalse(){
    this.products.forEach(e => { e.isSelected = false;
    });
  }

}
