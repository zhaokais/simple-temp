import { simple-tempTemplatePage } from './app.po';

describe('simple-temp App', function() {
  let page: simple-tempTemplatePage;

  beforeEach(() => {
    page = new simple-tempTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
