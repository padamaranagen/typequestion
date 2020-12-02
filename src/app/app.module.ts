import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { QuestionbankComponent } from './component/questionbank/questionbank.component';
import { FooterComponent } from './component/footer/footer.component'; 
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HeaderComponent } from './component/header/header.component';
import { SharedModule } from './shared/shared.module';
import { SideNavBarComponent } from './component/side-nav-bar/side-nav-bar.component';


export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    DashboardComponent,
    QuestionbankComponent,
    FooterComponent,
    HeaderComponent,
    SideNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService){
     // this language will be used as a fallback when a translation isn't found in the current language
     translate.setDefaultLang('en_US');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en_US');
    
  }
 }
