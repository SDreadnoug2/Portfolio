import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import SelectedCategoryContext from "../utils/SelectedCategoryContext";
function App() {
  const [selected, setSelected] = useState([]);

  const handleLinkClick = (e) => {
    setSelected(e.target.id);
    console.log(selected);
  };
  useEffect(() => {}, [selected]);
  return (
    <div className="App">
      <SelectedCategoryContext.Provider value={selected}>
        <Header />
        <Main linkclick={handleLinkClick} />
        <Footer />
      </SelectedCategoryContext.Provider>
    </div>
  );
}

export default App;
