import React from "react";
import "../styles/style.css";

export default ({ onChange, value }) => {
  return (
    <div>
      <input
        className="search-bar"
        id="searchBar"
        placeholder={"Type whatever..."}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
