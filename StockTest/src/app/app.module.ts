import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { StockApiService } from './services/stock-api.service';
import { StockListComponent } from './stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent, SearchComponent, StockListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [StockApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
