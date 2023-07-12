import React, { useState, useEffect } from "react";
import CountryItem from "../components/CountryItem";
import axios from "axios";

function CountryList(params) {
  const {filterHan} = params;
  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
       filterHan===undefined?setCountry(res.data) :setCountry(res.data.filter(c => c.name.common.includes(filterHan)))
      })
      .catch((err) => console.log(err));
    }, [filterHan]);
    console.log(filterHan);
    return (
      <div>
      <div className="container mt-3">
        <div className="row  g-4">
          {country ? (
            country.map((item) => {
              return (
                  <CountryItem key={item.name.common} data={item} />
              );
            })
          ) : (
            <h1 className="text-danger">...loading</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryList;
