import { GeoLocationAppPage } from './app.po';

describe('geo-location-app App', () => {
  let page: GeoLocationAppPage;

  beforeEach(() => {
    page = new GeoLocationAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
