import { Component, EventEmitter, Output } from '@angular/core';
import { SearchResult } from '../models/search-result';
import { StockApiService } from '../services/stock-api.service';

@Component({
  selector: 'stock-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() stockSelect = new EventEmitter();
  stocks: SearchResult[];

  constructor(private stockApi: StockApiService) { }

  search(pref: string) {
    if (pref.length > 1) {
      this.stockApi.searchStocks(pref)
        .then(res => this.stocks = res)
    }
    else
      this.stocks = [];
  }

  selectStock(symbol: string) {
    this.stockSelect.emit(symbol);
  }
}
