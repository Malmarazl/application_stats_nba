import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { PlayerParamsService } from '../../services/player-params.service';

@Component({
  selector: 'app-info-player',
  templateUrl: './info-player.component.html',
  styleUrls: ['./info-player.component.css']
})
export class InfoPlayerComponent implements OnInit {

  /*
  * This component is the one that contains the information of the players,
  * the ones that come as "binding" and the information of the specific player on which you have pressed the button.
  * In the app you will have the objects of each player with all their properties and put in HTML the parameter you want to use.
  * or even if in the future you want to try different data you have stored in the object.
  */

  @Input() player: any;

  playerInfo: any;
  header: any;
  resultPlayer: any;
  view: boolean = false;

  constructor(private PlayersService: PlayersService, private PlayerParamsService: PlayerParamsService) { }

  ngOnInit() {}

  public getPlayer(id: string) {
    this.PlayersService.getPlayer(id)
      .subscribe((playerResponse) => {
        this.header = playerResponse.resultSets[0].headers;
        this.resultPlayer = playerResponse.resultSets[0].rowSet;
        this.playerInfo = this.PlayerParamsService.modelConverter(this.header, this.resultPlayer)[0];
      });
  }
}
