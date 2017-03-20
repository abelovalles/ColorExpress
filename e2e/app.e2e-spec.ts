import { ColorExpress3Page } from './app.po';

describe('color-express3 App', function() {
  let page: ColorExpress3Page;

  beforeEach(() => {
    page = new ColorExpress3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
