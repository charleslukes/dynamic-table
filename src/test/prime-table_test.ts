import {PrimeTable} from '../prime-table.js';
import {expect, fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('prime-table', () => {
  test('is defined', () => {
    const el = document.createElement('prime-table');
    assert.instanceOf(el, PrimeTable);
  });

  test('renders with default values', async () => {
    const el: PrimeTable = await fixture(html`<prime-table></prime-table>`);
    expect(el.amountOfPrimeNumbers).to.equal(10);
  });

  test('renders with table', async () => {
    const el: PrimeTable = await fixture(html`<prime-table></prime-table>`);
    expect(el).shadowDom.to.equalSnapshot();
  });

  test('can instantiate an element with properties', async () => {
    const el: PrimeTable = await fixture(
      html`<prime-table amountOfPrimeNumbers=${15}></prime-table>`
    );
    expect(el.amountOfPrimeNumbers).to.equal(15);
  });
});
