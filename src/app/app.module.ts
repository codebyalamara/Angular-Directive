import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicCssDirective } from './shared/directives/basicCss.directive';
import { CssAdvanceDirective } from './shared/directives/css-advance.directive';
import { LowercaseDirective } from './shared/directives/lowercase.directive';
import { CreditCardFormatterDirective } from './shared/directives/credit-card-formatter.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicCssDirective,
    CssAdvanceDirective,
    LowercaseDirective,
    CreditCardFormatterDirective
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
