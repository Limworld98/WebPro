// SearchPlace.js

import React, { useState } from "react";
import MapContainer from "./MapContainer";

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };
  
  const tStyle={
    position:"absolute",
    top:"12vh",
    left:"2%",
    zIndex:'2'
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit} style={tStyle}>
        <input
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
        />        
        <button type="submit">검색</button>
      </form>     
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;