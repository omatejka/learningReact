import React from "react";

export default ({ filteredResults }) => {
  console.log("list", filteredResults)
  return <ul id="filteredResults">
      {filteredResults && filteredResults.map(
          ({ avatar_url, html_url, login, id }) => {
            return (
              <li key={id}>
                <img src={avatar_url} alt="" />
                <a href={html_url} target="blank">
                  {login}
                </a>
              </li>
            );
          }
        )}
    </ul>;
};
