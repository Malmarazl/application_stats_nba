import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlayersService } from './services/players.service';
import { ListPlayersComponent } from './players/list-players/list-players.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
