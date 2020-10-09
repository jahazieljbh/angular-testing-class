import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetDemoComponent } from './greet-demo/greet-demo.component';
import { CurrenciesDemoComponent } from './currencies-demo/currencies-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetDemoComponent,
    CurrenciesDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
