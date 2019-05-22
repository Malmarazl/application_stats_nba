import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { PlayersService } from './players.service';

describe('PlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
      providers: [PlayersService]
    });
  });

  it('should be created', inject([PlayersService], (service: PlayersService) => {
    expect(service).toBeTruthy();
  }));
});
