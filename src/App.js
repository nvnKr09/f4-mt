import React, { useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Details from "./Components/Details";
import Homepage from "./Components/Homepage";

const App = () => {
  const [fetchData, setFetchData] = useState([]);
  // console.log("in app",fetchData); 
  function fetchDataUpdater(data) {
    setFetchData(data);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage fetchDataUpdater={fetchDataUpdater}/>} />
        <Route path="/details/:pincode" element={<Details fetchData={fetchData}/>} />
      </Routes>
    </div>
  );
};

export default App;
