import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CountryDetail = () => {
  const { id } = useParams();
  const [country, SetCountry] = useState();
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${id}`)
      .then((res) => SetCountry(res.data[0]))
      .catch((err) => console.log(err));
  }, []);
  country && console.log(country);
  return country ? (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="detail-img"
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </div>
        <div className="col-lg-6">
          <div className="col-12 d-flex justify-content-center">
            <span className="detail-name">{country.name.official}</span>
          </div>
          <div className="d-flex justify-content-center mt-3 detail-content">
            <div className="col-6">
              <p>Capital : {country.capital[0]}</p>
              <p>Population : {country.population}</p>
              <p>Area : {country.area}</p>
            </div>
            <div className="col-6">
              <p>Region : {country.region}</p>
              <p>Subregion : {country.subregion}</p>
              <p>Time zone : {country.timezones[0]}</p>
            </div>
          </div>
          <div className="col-12">
            <p>Borders : </p>
            {country.borders.map((bo) => {
              return <span className="border border-3 p-1 ms-2">{bo}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    "..loading"
  );
};

export default CountryDetail;
