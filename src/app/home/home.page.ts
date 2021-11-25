import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../Product';
import { formatDate } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { HistoryService } from '../history.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedItem = "Product";
  buyQuantity = "Quantity";
  totalPrice: number = 0;
  listOfProducts: Product[];
  prod: Product;
  now: Date;
  time: string;

  constructor(private serviceHist: HistoryService, private service: ProductsService, public alertController: AlertController) { }

  ngOnInit() {
    this.listOfProducts = this.service.getAllProducts();
  }

  onSelect(product) {
    this.prod = product;
    this.selectedItem = this.prod.name;
    this.service.setAllFalse();
    this.service.setTrue(product);  
    console.log(this.prod);
  }

  setBackground(product){
    return product.isSelected;
  }

  setFalse(){
    this.selectedItem = "Product";
    this.service.setAllFalse();
  }
  numPressed(num: string) {
    if (this.selectedItem == "Product") {
    } else {
      if (this.buyQuantity == "Quantity") {
        this.buyQuantity = num;
        this.totalPrice = parseInt(this.buyQuantity) * this.prod.price;

      } else if (this.buyQuantity == "0") {
        this.buyQuantity = num;
        this.totalPrice = parseInt(this.buyQuantity) * this.prod.price;
      }
      else {
        this.buyQuantity = this.buyQuantity + num.toString();
        this.totalPrice = parseInt(this.buyQuantity) * this.prod.price;
      }
    }
  }
  clear() {
    this.buyQuantity = "Quantity";
  }

  async purchase() {
    
    if(this.buyQuantity == "Quantity" || this.selectedItem == "Product"){

    }else if (parseInt(this.buyQuantity) > this.prod.quantity) {
      this.buyQuantity = "Quantity";
      this.totalPrice = 0;
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error!',
        message: 'Item Quantity Selected Is Not Available. Please Choose A Less Amount.',
        buttons: ['Okay']
      });

      await alert.present();
      

    } else {
      this.time = formatDate(new Date(), 'dd/MM/yyyy hh:mm:ss a', 'en-US', '-0500');
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Success',
        message: 'You Purchased ' + this.buyQuantity + ' of Item: ' + this.selectedItem + ' for: $' + this.totalPrice.toFixed(2),
        buttons: ['Okay']
      });

      await alert.present();
      
      this.service.updateQuantity(this.prod, parseInt(this.buyQuantity));
      this.serviceHist.createHistory(this.selectedItem, parseInt(this.buyQuantity), this.time, this.totalPrice);
      this.service.setAllFalse();
      this.selectedItem = "Product";
      this.buyQuantity = "Quantity";
      this.totalPrice = 0;
      
    }

  }



}
