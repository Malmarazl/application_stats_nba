import { TestBed, inject } from '@angular/core/testing';

import { PlayerParamsService } from './player-params.service';

describe('PlayerParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerParamsService]
    });
  });

  it('should be created', inject([PlayerParamsService], (service: PlayerParamsService) => {
    expect(service).toBeTruthy();
  }));
});
