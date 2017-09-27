import React from "react";

export default ({ onChange, value }) => {
  return (
    <div>
      <input
        id="filterBar"
        placeholder={"Filter results..."}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
