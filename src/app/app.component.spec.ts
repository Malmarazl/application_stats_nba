import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { ListPlayersComponent } from './players/list-players/list-players.component';
import { InfoPlayerComponent } from './players/info-player/info-player.component';

import { PlayersService } from './services/players.service';
import { PlayerParamsService } from './services/player-params.service';



describe('AppComponent', () => {
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
        AppComponent,
        ListPlayersComponent,
        InfoPlayerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Stats NBA');
  }));
});
