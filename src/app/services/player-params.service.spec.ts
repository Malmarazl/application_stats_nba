import { TestBed, inject } from '@angular/core/testing';

import { PlayerParamsService } from './player-params.service';

describe('PlayerParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ PlayerParamsService ]
    });
  });

  it('should be created', inject([PlayerParamsService], (PlayerParamsService: PlayerParamsService) => {
    expect(PlayerParamsService).toBeTruthy();
  }));

  it('should work modelConverter', inject([PlayerParamsService], (PlayerParamsService: PlayerParamsService) => {
    let correctModel, header, elements;

    correctModel = {
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
    };

    header = [ "PLAYER_ID", "PLAYER_NAME", "TEAM_ID", "TEAM_ABBREVIATION", "AGE", "PLAYER_HEIGHT", "PLAYER_HEIGHT_INCHES",
               "PLAYER_WEIGHT", "COLLEGE", "COUNTRY", "DRAFT_YEAR", "DRAFT_ROUND", "DRAFT_NUMBER", "GP", "PTS", "REB", "AST",
               "NET_RATING", "OREB_PCT", "DREB_PCT", "USG_PCT", "TS_PCT", "AST_PCT" ];
    
    elements = [[ 1627773, "AJ Hammons", 1610612742, "DAL", 24, "7-0", 84, "260", "Purdue", "USA", "2016", "2", "46",
                  22, 48, 36, 4, -0.6, 0.045, 0.172, 0.164, 0.472, 0.038 ]];

    expect(PlayerParamsService.modelConverter(header, elements)[0]).toEqual(correctModel);
  }));
});
