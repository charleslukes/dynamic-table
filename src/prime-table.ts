import {
  LitElement,
  html,
  customElement,
  css,
  TemplateResult,
  property,
  internalProperty,
} from 'lit-element';

/**
 * A simple dynamic table
 */

@customElement('prime-table')
export class PrimeTable extends LitElement {
  // external property that can be passed via the template
  @property({type: Number}) amountOfPrimeNumbers = 10;

  // internal property used only in this class
  @internalProperty() private primeNumbers: Array<number> = [];

  static styles = css`
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td,
    th {
      border: 1px solid #dddddd;
      text-align: right;
      padding: 10px;
      font-size: 13px;
    }

    tr:nth-child(even) {
      background-color: #eeeff7;
    }

    #row-begin {
      text-align: left;
      font-weight: bold;
    }

    .container {
      font-family: sans-serif;
    }
  `;

  firstUpdated() {
    this.primeNumberOutput();
  }

  primeNumberOutput() {
    this.primeNumbers = this.generatePrimeNumbers(this.amountOfPrimeNumbers);
  }

  // generate a certain amount of prime numbers
  generatePrimeNumbers(amountOfPrimeNumbers: number): Array<number> {
    let check = 0;
    let counter = 3;

    let primeNumbers = [2];

    while (check < amountOfPrimeNumbers - 1) {
      if (this.checkIfPrime(counter)) {
        primeNumbers.push(counter);
        check++;
      }
      counter++;
    }

    return primeNumbers;
  }

  // check if a number is prime
  checkIfPrime(numberToCheck: number) {
    for (let index = 2; index < numberToCheck; index++) {
      if (numberToCheck % index === 0) {
        return false;
      }
    }
    return true;
  }

  // generate the table headers
  generateHeaders(primeNumbers: Array<number>): TemplateResult {
    const headers = html`
      <tr>
        <th></th>
        ${primeNumbers.map((num) => html`<th>${num}</th>`)}
      </tr>
    `;

    return headers;
  }

  // generate the table rows
  genrateRows(primeNumbers: Array<number>): Array<TemplateResult> {
    return primeNumbers.map(
      (num: number, _index: number, arr: Array<number>) => {
        return html`
          <tr>
            <td id="row-begin">${num}</td>
            ${arr.map((headerNumber) => html`<td>${num * headerNumber}</td>`)}
          </tr>
        `;
      }
    );
  }

  handleChange(e: {target: HTMLInputElement}) {
    const value = +e.target.value;
    if (value) {
      if (value > 150) {
        alert(
          'This computation will take time, because the amount prime number is large!!!'
        );
      }
      this.amountOfPrimeNumbers = value;
      this.primeNumberOutput();
    }
  }

  generateTable(): TemplateResult {
    return html`
      <div class="container">
        <h2>Prime Number Multiplicative Table</h2>
        <p>
          Enter Amount of Prime Numbers
          <input type="number" @input=${this.handleChange} />
        </p>
        <table class="main-table">
          ${this.generateHeaders(this.primeNumbers)}
          ${this.genrateRows(this.primeNumbers)}
        </table>
      </div>
    `;
  }

  render() {
    return html`${this.generateTable()}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'prime-table': PrimeTable;
  }
}
