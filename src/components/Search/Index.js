import React from "react";

const Index = ({ term, handleChange }) => {
  return (
    <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="search pokemon"
          value={term}
          onChange={handleChange}
        />
        <button class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Index;
