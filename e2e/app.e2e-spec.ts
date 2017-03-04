import { OrderingSystemPage } from './app.po';

describe('ordering-system App', () => {
  let page: OrderingSystemPage;

  beforeEach(() => {
    page = new OrderingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
