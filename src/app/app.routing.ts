import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LinksPageComponent } from './components/links-page/links-page.component';


const APP_ROUTES: Routes = [
  { path: 'categories', component: HomePageComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full'},
  { path: 'errorpage', component: ErrorPageComponent },
  { path: 'categories/:name', component: LinksPageComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
