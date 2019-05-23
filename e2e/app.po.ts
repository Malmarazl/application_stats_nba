import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphTitle() {
    return element(by.css('app-root h1')).getText();
  }

  getParagraphList() {
    return element(by.css('h3')).getText();
  }
}
