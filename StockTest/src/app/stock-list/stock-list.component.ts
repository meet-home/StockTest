import { Component, OnInit } from '@angular/core';
import { StockData } from '../models/stock-data';
import { StockApiService } from '../services/stock-api.service';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockList = new Map<string, StockData>();

  constructor(private stockApi: StockApiService) { }

  ngOnInit(): void {
    this.stockApi.stockObservable.subscribe(symbol => this.addSymbolToList(symbol));

    
    setTimeout(() => {

    }, 5000);
  }

  addSymbolToList(symbol: string) {
    if (this.stockList.has(symbol)) {
      alert("already subscribed");
    }
    else {
      this.stockList.set(symbol, null);
    }
  }

  getStockList() {
    var list = Array.from(this.stockList.values());
    if (list.length > 0) {
      list.filter(s => s.UpdateId > 5)


      this.stockApi.getStocks(list.map(s => s.Symbol).join(","))
        .then(sl => this.loadStockList(sl));
    }
  }

  loadStockList(list) {


  }
}
