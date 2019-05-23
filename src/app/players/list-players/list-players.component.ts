import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { PlayerParamsService } from '../../services/player-params.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  playerList: any;
  resultPlayers: any;
  header: any;

  constructor(private PlayersService: PlayersService, private PlayerParamsService: PlayerParamsService) { }

  ngOnInit() {
    this.getPlayers();
  }

  private getPlayers(): void {
    this.PlayersService.getPlayers()
      .subscribe((response) => {
        this.header = response[0].headers;
        this.resultPlayers = response[0].rowSet;
        this.playerList = this.PlayerParamsService.modelConverter(this.header, this.resultPlayers);
      });
  }
}
