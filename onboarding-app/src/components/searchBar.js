import React from "react";

export default ({ onChange, value }) => {
  return (
    <div>
      <input
        placeholder={"Type whatever..."}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
