import { SELECTORS } from "../constants/constants.js";
import { $ } from "../utils/dom.js";

class LottoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  init() {
    this.view.render(this.view.$target, "init");
    this.view.setEvent(
      $(SELECTORS.PRICE_FORM),
      "submit",
      this.model.purchaseLotto
    );
  }
}

export default LottoController;
