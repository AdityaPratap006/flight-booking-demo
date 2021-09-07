import React, { useEffect, useState } from "react";
import FormInput from "../FormInput/FormInput";

const SearchBar = ({ getSearchData }) => {
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    travelDate: "",
  });

  const handleChange = (event) => {
    event.preventDefault();

    const id = event.target.id;
    const value = event.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  //   useEffect(() => {
  //     console.log(formData);
  //   }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    getSearchData(formData);
  };

  return (
    <div className="search-bar">
      <form>
        <FormInput
          id="source"
          type="text"
          placeholder="Source"
          value={formData.source}
          onChange={handleChange}
        />
        <FormInput
          id="destination"
          type="text"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
        />
        <FormInput
          id="travelDate"
          type="date"
          placeholder="Travel Date"
          value={formData.travelDate}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
