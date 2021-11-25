import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  
  products = [{
    name: "Pants",
    quantity: 20,
    price: 50.7
  },{
    name: "Shoes",
    quantity: 20,
    price: 50.7
  },{
    name: "Hat",
    quantity: 10,
    price: 50.7
  },{
    name: "Tshirt",
    quantity: 10,
    price: 50.7
  },{
    name: "Dresses",
    quantity: 24,
    price: 50.7
  },{
    name: "Socks",
    quantity: 50,
    price: 50.7
  }
]

  
}
