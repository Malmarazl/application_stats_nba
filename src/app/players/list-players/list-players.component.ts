import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../classes/player';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  playerList: Player[] = [];

  constructor(private PlayersService: PlayersService) { }

  ngOnInit() {
    this.PlayersService.getPlayers()
    .subscribe( players => {
      this.playerList = players;
    });
  }

}
