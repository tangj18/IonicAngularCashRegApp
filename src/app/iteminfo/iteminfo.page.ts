import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-iteminfo',
  templateUrl: './iteminfo.page.html',
  styleUrls: ['./iteminfo.page.scss'],
})
export class IteminfoPage implements OnInit {
  iName: string;
  iQuant: number;
  iDate: string;
  iTotal: number;

  constructor(private Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.Activatedroute.queryParams.subscribe(params =>{
      this.iName = params['name'];
      this.iQuant = params['quantity'];
      this.iDate = params['date'];
      this.iTotal = params['total'];
    })
    console.log(this.iName + this.iQuant + this.iDate + this.iTotal);
  }

}
