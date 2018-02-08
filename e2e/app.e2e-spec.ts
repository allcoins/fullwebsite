import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('ibc App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

 
 it('Should get noticias buttom text', () => {
      page.navigateTo();
      expect(page.getButtonNoticias().getText()).toEqual('Notícias')
      
  });
    
    
  it('should display Horarios de Actividades', () => {
      page.navigateTo();
      expect(page.getHomeText().getText()).toEqual('Horários de Actividades');
  });
    
    
    it('should route to Notícias', () => {
        page.navigateTo();
        page.getButtonNoticias().click();
        browser.pause();
  });
    
    
});
