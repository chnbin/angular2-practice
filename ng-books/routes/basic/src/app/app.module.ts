import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,
         Routes
       } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';

import { LocationStrategy, HashLocationStrategy } from '../../node_modules/@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactus', redirectTo: 'contact'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }