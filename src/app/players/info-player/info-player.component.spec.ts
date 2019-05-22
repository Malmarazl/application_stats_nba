import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlayersService } from '../../services/players.service';
import { PlayerParamsService } from '../../services/player-params.service';

import { InfoPlayerComponent } from './info-player.component';

describe('InfoPlayerComponent', () => {
  let component: InfoPlayerComponent;
  let fixture: ComponentFixture<InfoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PlayersService,
        PlayerParamsService
      ],
      declarations: [ InfoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
