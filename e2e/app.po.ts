import { browser, by, element } from 'protractor';

export class Ang2S5Assign5.2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
