import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Product } from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {
  inputText: string;
  listOfProducts: Product[]
  product: Product;
  constructor(private service: ProductsService, private alertController: AlertController) { }

  stock = {
    quantity: ''
  }

  ngOnInit() {
    this.listOfProducts = this.service.getAllProducts();
  }
  onSelect(item){
    this.product = item;
    this.service.setAllFalse();
    this.service.setTrue(this.product);
    console.log("here" + this.product.name);
  }
  setBackground(product){
    return product.isSelected;
  }

  clear(){
    console.log("cancel");
    this.stock.quantity = "";
  }

  setFalse(){
    this.inputText = "";
    this.service.setAllFalse();
  }

  async restock(form){
    console.log(form.value.stock);
    if(this.product == null){
      console.log("empty");
    }else if(!parseInt(form.value.stock)){
      console.log("failed");
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Success!',
        message: 'Added ' + form.value.stock + ' stock to ' + this.product.name + '.',
        buttons: ['Okay']
      });

      await alert.present();
      this.service.restockQuantity(this.product, parseInt(form.value.stock));
      this.service.setAllFalse();
      this.product = null;
      this.stock.quantity = "";
      
    }
  }
}
