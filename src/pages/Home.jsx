import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { getFlights } from "../utils/api";

const Home = () => {
  const [searchData, setSearchData] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const getSearchData = (formData) => {
    setSearchData(formData);
  };

  useEffect(() => {
    /** Send Request to backend to fetch flights */
    console.log(searchData);

    getFlights(searchData)
      .then((results) => {
        setSearchResults(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchData]);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div>
      <h1> Home Page</h1>
      {/* Search bar */}
      <SearchBar getSearchData={getSearchData} />
      {/* Flight List */}
    </div>
  );
};

export default Home;
