import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { QuestionbankComponent } from './component/questionbank/questionbank.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    DashboardComponent,
    QuestionbankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
