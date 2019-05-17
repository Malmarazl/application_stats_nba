import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  playerList: Array<any>;
  result: Object;

  constructor(private PlayersService: PlayersService) { }

  ngOnInit() {
    this.getPlayers();
  }

  private getPlayers(): void {
    this.PlayersService.getPlayers()
    .subscribe((response) => {
      this.result = response;
      this.playerList = response[0].rowSet;
    });
  }

}
