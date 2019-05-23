import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { PlayerParamsService } from '../../services/player-params.service';

@Component({
  selector: 'app-info-player',
  templateUrl: './info-player.component.html',
  styleUrls: ['./info-player.component.css']
})
export class InfoPlayerComponent implements OnInit {

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
