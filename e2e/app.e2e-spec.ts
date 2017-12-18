import { UkrcomPage } from './app.po';

describe('ukrcom App', () => {
  let page: UkrcomPage;

  beforeEach(() => {
    page = new UkrcomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
