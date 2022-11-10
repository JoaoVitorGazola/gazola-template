import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './itens/button/button.component';
import { FullDemoComponent } from './full-demo/full-demo.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FullDemoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
