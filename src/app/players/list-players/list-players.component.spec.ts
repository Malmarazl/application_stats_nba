import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlayersService } from '../../services/players.service';
import { PlayerParamsService } from '../../services/player-params.service';

import { ListPlayersComponent } from './list-players.component';
import { InfoPlayerComponent } from '../info-player/info-player.component';

describe('ListPlayersComponent', () => {
  let component: ListPlayersComponent;
  let fixture: ComponentFixture<ListPlayersComponent>;

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
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
