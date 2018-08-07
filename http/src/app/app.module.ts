import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { SerachBoxComponent } from './youtube-search/serach-box.component';
import { SerachResultComponent } from './youtube-search/serach-result.component';
import { YoutubeSearchInjectables } from './youtube-search/youtube-search.injectables';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeSearchComponent,
    SerachBoxComponent,
    SerachResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [YoutubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
