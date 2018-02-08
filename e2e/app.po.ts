import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root')).getText();
  }
    
getButtonNoticias() {
    return element(by.css('[routerlink="noticias"]'));
  }
    
getHomeText() {
    return element(by.css('app-root h2'));
  }
    
}
