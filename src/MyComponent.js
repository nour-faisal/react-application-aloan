import { useContext } from "react";
import { LoarnContext } from "./context/LoarnInputContext";

export default function MYComponent() {
  const inputContext = useContext(LoarnContext);
  return (
    <>
      <label>{inputContext.labelTitle}</label>
      <input
        value={inputContext.inputValue}
        onChange={(event) => {
          inputContext.handelChange(event.target.value);
        }}
      />
    </>
  );
}
