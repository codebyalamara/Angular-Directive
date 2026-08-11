import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicCssDirective } from './shared/directives/basicCss.directive';
import { CssAdvanceDirective } from './shared/directives/css-advance.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicCssDirective,
    CssAdvanceDirective
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
