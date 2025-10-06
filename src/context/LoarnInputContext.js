import { createContext } from "react";

export let LoarnContext = createContext({
  labelTitle: "",
  inputValue: null,
  handelChange: null,
});
