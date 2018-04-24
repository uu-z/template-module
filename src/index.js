import Mhr from "menhera";

Mhr.$use({
  _hooks: {
    say: {
      _({ _val }) {
        console.log(_val);
      }
    }
  }
})
  .$use({ say: "Hello World" })
  .$use([{ say: "Hello" }, { say: "World" }]);
