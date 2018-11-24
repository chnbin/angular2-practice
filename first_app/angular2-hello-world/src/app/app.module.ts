import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './Server/Server.component';
import { ServersComponent } from './servers/servers.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
		AppComponent,
		ServerComponent,
		ServersComponent,
		CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
