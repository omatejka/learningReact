import React from "react";

export default ({ onChange, value }) => {
  return (
    <div>
      <input
        placeholder={"Filter results..."}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
