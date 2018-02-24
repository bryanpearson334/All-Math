import { SamMathPage } from './app.po';

describe('sam-math App', () => {
  let page: SamMathPage;

  beforeEach(() => {
    page = new SamMathPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
