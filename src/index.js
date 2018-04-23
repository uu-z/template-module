import Menhera from "menhera";

const _ = new Menhera({
  _hooks: {
    say: {
      _({ _val }) {
        console.log(_val);
      }
    }
  }
});

_.$use({ say: "Hello World" });
_.$use([{ say: "foo" }, { say: "bar" }]);
