import { Component, OnInit } from '@angular/core';
import { StockApiService } from './services/stock-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private stockApi: StockApiService) { }

  ngOnInit(): void {
  }


  stockSelected(symbol) {
    this.stockApi.emitStoclAdded(symbol);
  }
}
