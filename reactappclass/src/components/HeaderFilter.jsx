import React, { useState } from "react";

function HeaderFilter(params) {
  const [searchValue, setSearchvalue] = useState();
  const inputHandler = (e) => {
    setSearchvalue(e.target.value);
  };
  const sumbitHandler = () => {
    params.search(searchValue);
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-between">
        <div className="col-lg-5 d-flex ">
          <input
            onChange={inputHandler}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            onClick={sumbitHandler}
            className="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </div>
        <div className="col-lg-2">
          <select className="form-select">
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="ocenia">Ocenia</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default HeaderFilter;
