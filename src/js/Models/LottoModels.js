import {
  MAX_LOTTO_NUM,
  MIN_LOTTO_NUM,
  PRICE_UNIT,
  SELECTORS,
} from "../constants/constants.js";
import { isValidPrice } from "../utils/validations.js";

class LottoModel {
  constructor() {
    this.ticketQuantity = 0;
    this.tickets = [[]];
  }

  purchaseLotto = (e) => {
    e.preventDefault();

    const price = +e.target.querySelector(SELECTORS.PRICE_FORM_INPUT).value;
    if (!isValidPrice(price)) throw new Error("Invalid Price Input");

    this.ticketQuantity = price / PRICE_UNIT;

    for (let i = 0; i < this.ticketQuantity; i++) {
      let ticket = this.generateRandomNumbers();
      this.tickets.push(ticket);
    }
  };

  generateRandomNumbers() {
    const ticketNumbers = [];
    for (let i = 1; i <= 6; i++) {
      const randomNumber =
        Math.floor(Math.random() * MAX_LOTTO_NUM) + MIN_LOTTO_NUM;
      ticketNumbers.push(randomNumber);
    }
    return ticketNumbers;
  }

  pickNumbers() {
    const pickedNumbers = this.numbers.slice(0, 6);
    pickedNumbers.sort((a, b) => a - b);
    return pickedNumbers;
  }
}

export default LottoModel;
