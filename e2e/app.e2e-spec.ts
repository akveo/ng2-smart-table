import { Ng2SmartTableDemoPage } from './app.po';

describe('ng2-smart-table-demo App', () => {
  let page: Ng2SmartTableDemoPage;

  beforeEach(() => {
    page = new Ng2SmartTableDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
