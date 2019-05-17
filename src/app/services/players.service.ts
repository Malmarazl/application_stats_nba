import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../classes/player';


@Injectable()
export class PlayersService {

  readonly API_BASE_URL: string = 'https://stats.nba.com/stats';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.API_BASE_URL}/leaguedashplayerbiostats/?PerMode=Totals&LeagueID=00&Season=2016-17&SeasonType=Regular Season`);
  }

  getPlayer(id: string) { 
    return this.http.get<any>(`${this.API_BASE_URL}/commonplayerinfo/?PlayerID=${id}`);
  }

}
