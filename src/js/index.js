import LottoApp from "./LottoApp.js";
import { $ } from "./utils/dom.js";
import { SELECTORS } from "./constants/constants.js";

new LottoApp($(SELECTORS.APP_ID));
