import { AppPage } from './app.po';

describe('stats-nba App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title Stats NBA', () => {
    page.navigateTo();
    expect(page.getParagraphTitle()).toEqual('Stats NBA');
  });

  it('should display title list player', () => {
    page.navigateTo();
    expect(page.getParagraphList()).toEqual('List Players');
  });
});
