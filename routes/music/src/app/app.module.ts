import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistsComponent },
  { path: 'track/:id', component: TracksComponent },
  { path: 'albums/:id', component: AlbumsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistsComponent,
    AlbumsComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
