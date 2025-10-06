import "./App.css";
import LoanForm from "./LoanFrom";
import { userContext } from "./context/UserContext";
function App() {
  return (
    <userContext.Provider
      value={{ userName: "nour@", email: "nour@gmail.com", name: "nour" }}
    >
      <div className="App" style={{ marginTop: "100px" }}>
        <LoanForm />
      </div>
    </userContext.Provider>
  );
}

export default App;
