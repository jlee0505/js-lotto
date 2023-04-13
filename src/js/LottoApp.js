import LottoModel from "./Models/LottoModels.js";
import LottoView from "./Views/LottoView.js";
import LottoController from "./Controllers/LottoController.js";

class LottoApp {
  constructor($target) {
    this.$target = $target;
    this.model = new LottoModel();
    this.view = new LottoView(this.$target);
    this.controller = new LottoController(this.model, this.view);
  }
}

export default LottoApp;
