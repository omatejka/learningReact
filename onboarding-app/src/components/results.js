import React from "react";
import ResultList from "./list";

export default ({ results }) => {
  return (
    <div>
      <div id="results">
        <ResultList results={results} />
      </div>
    </div>
  );
};
