import { Component,
         NgModule 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {
  RouterModule,
  Routes
} from '@angular/router';

import{
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
