import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

window.onload = function () {
  sessionStorage.clear();
};
function App() {
  const [balance, setBalance] = React.useState(100);
  const [played, setPlayed] = React.useState([]);
  const [loggedIn, setLogin] = React.useState(false);

  const updateSlotInTable = (slot, balance, time) => {
    debugger;
    let records = JSON.parse(sessionStorage.getItem("record")) || [];
    setBalance(balance);
    records.push({
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      slot: slot,
      time: new Date().toDateString(),
    });
    sessionStorage.setItem("record", JSON.stringify(records));
    setPlayed(records);
  };

  const handleLogout = () => setLogin(false);
  const handleLogIn = () => setLogin(true);

  return (
    <div className="App">
      <Header
        isUserLoggedIn={loggedIn}
        balance={balance}
        handleLogout={handleLogout}
        handleLogIn={handleLogIn}
      />
      <Content
        balance={balance}
        updateSlotInTable={updateSlotInTable}
        rows={played}
      />
      <Footer />
    </div>
  );
}

export default App;
