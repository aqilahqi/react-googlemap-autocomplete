import CustomHeader from "./components/CustomHeader";
import Map from "./components/Map";
import SearchBox from "./components/SearchBox";
import SearchHistory from "./components/SearchHistory";

// import { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="mainPage">
      <CustomHeader />
      <Map />
      <SearchBox />
      <hr />
      <SearchHistory />
    </div>
  );
};

export default App;
