import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PlayersService } from './services/players.service';
import { PlayerParamsService } from './services/player-params.service';

import { AppComponent } from './app.component';
import { ListPlayersComponent } from './players/list-players/list-players.component';
import { InfoPlayerComponent } from './players/info-player/info-player.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    InfoPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlayersService, PlayerParamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
