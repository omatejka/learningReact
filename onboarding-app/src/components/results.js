import React from "react";
import ResultList from "./list";

export default ({ results }) => {
  return (
    <div>
      <div>
        <ResultList results={results} />
      </div>
    </div>
  );
};
