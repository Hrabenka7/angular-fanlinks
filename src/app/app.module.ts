import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LinksTableComponent } from './components/links-table/links-table.component';
import { LinksDetailComponent } from './components/links-detail/links-detail.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LinksPageComponent } from './components/links-page/links-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LinksTableComponent,
    LinksDetailComponent,
    ErrorPageComponent,
    LinksPageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
