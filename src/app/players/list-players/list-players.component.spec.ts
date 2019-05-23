import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlayersService } from '../../services/players.service';
import { PlayerParamsService } from '../../services/player-params.service';

import { ListPlayersComponent } from './list-players.component';
import { InfoPlayerComponent } from '../info-player/info-player.component';

describe('ListPlayersComponent', () => {
  let component: ListPlayersComponent;
  let fixture: ComponentFixture<ListPlayersComponent>;
  const dataList: any = [{
              "PLAYER_ID": 1627773,
              "PLAYER_NAME": "AJ Hammons",
              "TEAM_ID": 1610612742,
              "TEAM_ABBREVIATION": "DAL",
              "AGE": 24,
              "PLAYER_HEIGHT": "7-0",
              "PLAYER_HEIGHT_INCHES": 84,
              "PLAYER_WEIGHT": "260",
              "COLLEGE": "Purdue",
              "COUNTRY": "USA",
              "DRAFT_YEAR": "2016",
              "DRAFT_ROUND": "2",
              "DRAFT_NUMBER": "46",
              "GP": 22,
              "PTS": 48,
              "REB": 36,
              "AST": 4,
              "NET_RATING": -0.6,
              "OREB_PCT": 0.045,
              "DREB_PCT": 0.172,
              "USG_PCT": 0.164,
              "TS_PCT": 0.472,
              "AST_PCT": 0.038
            },
            {
              "PLAYER_ID": 201166,
              "PLAYER_NAME": "Aaron Brooks",
              "TEAM_ID": 1610612754,
              "TEAM_ABBREVIATION": "IND",
              "AGE": 32,
              "PLAYER_HEIGHT": "6-0",
              "PLAYER_HEIGHT_INCHES": 72,
              "PLAYER_WEIGHT": "161",
              "COLLEGE": "Oregon",
              "COUNTRY": "USA",
              "DRAFT_YEAR": "2007",
              "DRAFT_ROUND": "1",
              "DRAFT_NUMBER": "26",
              "GP": 65,
              "PTS": 322,
              "REB": 69,
              "AST": 125,
              "NET_RATING": -1.8,
              "OREB_PCT": 0.019,
              "DREB_PCT": 0.056,
              "USG_PCT": 0.184,
              "TS_PCT": 0.507,
              "AST_PCT": 0.216
            },
            {
              "PLAYER_ID": 203932,
              "PLAYER_NAME": "Aaron Gordon",
              "TEAM_ID": 1610612753,
              "TEAM_ABBREVIATION": "ORL",
              "AGE": 21,
              "PLAYER_HEIGHT": "6-9",
              "PLAYER_HEIGHT_INCHES": 81,
              "PLAYER_WEIGHT": "220",
              "COLLEGE": "Arizona",
              "COUNTRY": "USA",
              "DRAFT_YEAR": "2014",
              "DRAFT_ROUND": "1",
              "DRAFT_NUMBER": "4",
              "GP": 80,
              "PTS": 1019,
              "REB": 405,
              "AST": 150,
              "NET_RATING": -3.3,
              "OREB_PCT": 0.048,
              "DREB_PCT": 0.124,
              "USG_PCT": 0.195,
              "TS_PCT": 0.53,
              "AST_PCT": 0.097
            }
          ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PlayersService,
        PlayerParamsService
      ],
      declarations: [
        ListPlayersComponent,
        InfoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlayersComponent);
    component = fixture.componentInstance;
    component.playerList = dataList;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be 3 number of players length', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('h4').length).toEqual(3);
  });
});
