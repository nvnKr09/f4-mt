import React, { useEffect, useState } from "react";
import "../Styles/details.scss";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const Details = ({ fetchData }) => {
  const [filterKey, setFilterKey] = useState("");
  const { pincode } = useParams(); // Access pincode from URL parameters
  const [loader, setLoader] = useState(true);

  // console.log("in detail",fetchData);
  useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
    setFilterKey(value);
  };

  const filteredData =
    fetchData &&
    fetchData.filter((item) => item.Name.toLowerCase().includes(filterKey));

  return (
    <>
      {loader ? (
        <div className="spinner-wrapper">
          <TailSpin height="60" width="60" color="#000" />
        </div>
      ) : (
        <>
          {fetchData ? (
            <div className="details-page">
              <div className="top">
                <h2>Pincode: {pincode}</h2>
                <h2 className="message">
                  Message:{" "}
                  <span>Number of pincode(s) found: {fetchData.length}</span>
                </h2>
              </div>
              <div className="search">
                <span className="material-icons">search</span>
                <input
                  type="text"
                  placeholder="Filter"
                  onChange={handleFilter}
                />
              </div>
              <div className="card-container">
                {filteredData.map((data, index) => (<Card key={index} data={data} />))}
              </div>
            </div>
          ) : (
            <div className="no-data-msg">
              <p>Couldn't find the postal data you're looking for…</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Details;
