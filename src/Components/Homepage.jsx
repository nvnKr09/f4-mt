import React, { useState } from "react";
import "../Styles/homepage.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Homepage = ({ fetchDataUpdater }) => {
  const [pincode, setPincode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNaN(pincode)) {
      alert("Postal code should be numbers only");
    } else if (pincode.length === 6) {
      // console.log("fetching");
      fetchPincodeData(pincode);
      setErrorMsg("");
      setPincode("");
    } else if (pincode.length !== 6) {
      alert("Postal code should be 6 digits");
    }
  };

  async function fetchPincodeData(pincode) {
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      console.log(response.data);
      fetchDataUpdater(response.data[0].PostOffice);
      navigate(`/details/${pincode}`);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setPincode(value);
  };

  return (
    <div className="homepage">
      <h2>Enter Pincode</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={pincode}
          placeholder="Pincode"
          onChange={handleChange}
          style={
            errorMsg ? { border: "2px solid red" } : { border: "2px solid" }
          }
        />
        {errorMsg && <p className="error-msg"> {errorMsg} </p>}
        <button type="submit">Lookup</button>
      </form>
    </div>
  );
};

export default Homepage;
