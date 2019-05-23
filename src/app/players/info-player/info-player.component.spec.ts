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
    component.player = {
      "PLAYER_ID": 203932,
      "PLAYER_NAME": "Aaron Gordon",
      "TEAM_ABBREVIATION": "ORL",
      "AGE": 21,
    };
    component.playerInfo = {
      "FIRST_NAME": "Aaron",
      "LAST_NAME": "Gordon",
      "BIRTHDATE": "1991-02-19T00:00:00"
    };

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render parameters player', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('div').textContent).toContain('Aaron Gordon');
    expect(compiled.querySelector('div').textContent).toContain(21);
    expect(compiled.querySelector('div').textContent).toContain('ORL');
  });

  it('should show info player when click in button', () => {
    const compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('button').click();
    fixture.detectChanges();

    expect(compiled.querySelector('div').textContent).toContain('Aaron');
    expect(compiled.querySelector('div').textContent).toContain('Gordon');
    expect(compiled.querySelector('div').textContent).toContain('Feb 19, 1991');
  });

  it('should call getPlayer', () => {
    const compiled = fixture.debugElement.nativeElement;

    spyOn(component, 'getPlayer' );
    compiled.querySelector('button').click();
    fixture.detectChanges();

    expect(component.getPlayer).toHaveBeenCalled();
  });
});
