import React from "react";

export default ({ filterValue, filterResults, actions }) => {
  return (
    <div>
      <input
        onChange={event => actions.changeFilterValue(event.target.value)}
        placeholder={"Filter results..."}
        type="text"
        value={filterValue}
      />
    </div>
  );
};
