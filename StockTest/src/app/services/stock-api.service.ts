import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SearchResult } from '../models/search-result';
//import { Weather } from '../_models/Weather';

@Injectable()
export class StockApiService {
  private stockSubject = new Subject<string>();
  stockObservable = this.stockSubject.asObservable();

  emitStoclAdded(symbol: string) {
    this.stockSubject.next(symbol);
  }

  constructor(private http: HttpClient) { }

  searchStocks(pref: string) {
    let url: string = `api/stocks?query=${pref}`;
    return <Promise<SearchResult[]>>this.http.get(url).toPromise();
  }

  getStocks(symbol: string) {
    let url: string = `api/stocks?symbols=${symbol}`;
    return <Promise<SearchResult[]>>this.http.get(url).toPromise();
  }
}
