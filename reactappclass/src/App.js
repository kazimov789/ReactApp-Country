import { Routes, BrowserRouter, Route } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";
import CountryList from "./pages/CountryList";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [searchFilterValue,setSearchValue] = useState();
  const searchHandler = (e) => {
    setSearchValue(e)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header search={searchHandler}/>
        <Routes>
          <Route path='/' element={<CountryList filterHan={searchFilterValue}/>}/>
          <Route path='/detail/:id' element={<CountryDetail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
