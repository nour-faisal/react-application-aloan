import "./LoanForm.css";
import Modal from "./Modal";
import { useState } from "react";
import MYComponent from "./MyComponent";
import { LoarnContext } from "./context/LoarnInputContext";
import { useContext } from "react";
import { userContext } from "./context/UserContext";
export default function LoanForm() {
  const userData = useContext(userContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [btnShow, setBtnShow] = useState(false);
  let intialName = userData.name;
  const [loanInput, setLoanInput] = useState({
    name: intialName,
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salrayRang: "",
  });

  const btnIsDisabled =
    loanInput.name === "" ||
    loanInput.phoneNumber === "" ||
    loanInput.age === "";

  function handelDivClick() {
    if (btnShow) {
      setBtnShow(false);
    }
  }

  function handelNameInputChange(value) {
    setLoanInput({ ...loanInput, name: value });
  }
  function handelPhoneNumberInputChange(value) {
    setLoanInput({ ...loanInput, phoneNumber: value });
  }
  function handelAgeInputChange(value) {
    setLoanInput({ ...loanInput, age: value });
  }

  return (
    <div
      onClick={handelDivClick}
      className="flex"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <h2 style={{ color: "white" }}>Hello {userData.name}</h2> */}
      <form>
        <h1>Application a Loan</h1>

        <LoarnContext.Provider
          value={{
            labelTitle: "name",
            inputValue: loanInput.name,
            handelChange: handelNameInputChange,
          }}
        >
          <MYComponent />
        </LoarnContext.Provider>
        <LoarnContext.Provider
          value={{
            labelTitle: "Phone Number",
            inputValue: loanInput.phoneNumber,
            handelChange: handelPhoneNumberInputChange,
          }}
        >
          <MYComponent />
        </LoarnContext.Provider>
        <LoarnContext.Provider
          value={{
            labelTitle: "Age",
            inputValue: loanInput.age,
            handelChange: handelAgeInputChange,
          }}
        >
          <MYComponent />
        </LoarnContext.Provider>

        <label style={{ marginTop: "25px" }}>Are you an employee</label>
        <input
          type="checkbox"
          checked={loanInput.isEmployee}
          onChange={(event) => {
            setLoanInput({ ...loanInput, isEmployee: event.target.checked });
          }}
        />
        <label style={{ marginTop: "25px", marginBottom: "10px" }}>
          salary
        </label>
        <select
          value={loanInput.salrayRang}
          onChange={(event) => {
            setLoanInput({ ...loanInput, salrayRang: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>
        <button
          className={btnIsDisabled ? "disabled" : ""}
          disabled={btnIsDisabled}
          onClick={(event) => {
            event.preventDefault();
            setErrorMessage(null);
            if (loanInput.age < 18 || loanInput.age >= 100) {
              setErrorMessage("The age not allowed");
            } else if (
              loanInput.phoneNumber.length < 10 ||
              loanInput.phoneNumber.length > 12
            ) {
              setErrorMessage("Phone Number Format  is Incorrect");
            }
            setBtnShow(true);
          }}
        >
          Submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} isVisibile={btnShow} />
    </div>
  );
}
