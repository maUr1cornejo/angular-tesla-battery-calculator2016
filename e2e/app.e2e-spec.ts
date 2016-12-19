import { AngularTeslaBatteryCalculatorPage } from './app.po';

describe('angular-tesla-battery-calculator App', function() {
  let page: AngularTeslaBatteryCalculatorPage;

  beforeEach(() => {
    page = new AngularTeslaBatteryCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
