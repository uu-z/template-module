import Mhr from "menhera";
import myModule from "../src";

Mhr.$use({
  _mount: {
    myModule
  }
})
  .$use({ say: "Hello World" })
  .$use([{ say: "Hello" }, { say: "World" }]);
