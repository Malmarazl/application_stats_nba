import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class PlayersService {

  readonly API_BASE_URL: string = 'https://stats.nba.com/stats';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`/stats/leaguedashplayerbiostats/?PerMode=Totals&LeagueID=00&Season=2016-17&SeasonType=Regular Season`)
    .pipe(
      map((result: any) => result.resultSets)
    );
  }

  getPlayer(id: string) { 
    return this.http.get(`/stats/commonplayerinfo/?PlayerID=${id}`);
  }
}
