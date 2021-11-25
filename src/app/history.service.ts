import { Injectable } from '@angular/core';
import { HistoryItem } from './HistoryItems';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  private itemHistory : HistoryItem[] = [];

  getAllHistory(){
    return [...this.itemHistory];
  }

  createHistory(n: string, q: number, d: string, t: number){
    this.itemHistory.push({name: n, quantity: q, date: d, total: t});
  }
}
