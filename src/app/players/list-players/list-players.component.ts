import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  playerList: any;
  resultPlayers: any;
  result: any;

  constructor(private PlayersService: PlayersService) { }

  ngOnInit() {
    this.getPlayers();
  }

  private getPlayers(): void {
    this.PlayersService.getPlayers()
    .subscribe((response) => {
      this.result = response;
      this.resultPlayers = response[0].rowSet;
      this.playerList = this.modelConverter(this.result, this.resultPlayers);
    });
  }

  private modelConverter(result, players) {
    let transformList;

    transformList = _.chain(players)
                     .map(function(player) {
                        return _.zipObject(result[0].headers, player);
                     })
                    .value();

    return transformList;
  }
}
