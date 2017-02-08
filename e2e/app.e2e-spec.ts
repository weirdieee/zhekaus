import { DwdPage } from './app.po';

describe('dwd App', function() {
  let page: DwdPage;

  beforeEach(() => {
    page = new DwdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
