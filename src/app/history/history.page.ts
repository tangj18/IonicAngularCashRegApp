import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { HistoryItem } from '../HistoryItems';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  listOfHistory: HistoryItem[];
  item: HistoryItem;

  constructor(private service:HistoryService, private router: Router) { }

  
  ngOnInit() {
    this.listOfHistory = this.service.getAllHistory();
  }

  navItemPage(hist){
    this.item = hist;
    this.router.navigate(['/iteminfo'], {queryParams: {name: this.item.name, quantity: this.item.quantity, date: this.item.date, total: this.item.total}});

  }
}
