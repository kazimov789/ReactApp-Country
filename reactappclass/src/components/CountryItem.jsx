import { Link } from "react-router-dom";
import React from "react";

function CountryItem({ data }) {
  const { name, flags, population, region, capital } = data;
  return (
    <div className="card col-lg-3 col-md-6">
        <Link className="link-i" to={`detail/${name.official}`}>
            <img src={flags.png} className="card-img-top imgs" alt={flags.alt} />
            <div className="card-body">
                <h5 className="card-title">{name.common}</h5>
                <p className="card-text">Population : {population}</p>
                <p className="card-text">Region : {region}</p>
                <p className="card-text">Capital : {capital}</p>
            </div>
        </Link>
    </div>
  );
}

export default CountryItem;
