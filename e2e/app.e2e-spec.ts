import { BeautyexchangePage } from './app.po';

describe('beautyexchange App', function() {
  let page: BeautyexchangePage;

  beforeEach(() => {
    page = new BeautyexchangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
