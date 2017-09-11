import React from "react";

export default ({ filteredResults }) => {
  return (
    <ul>
      {filteredResults &&
        filteredResults.map(({ avatar_url, html_url, login, id }) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <a href={html_url} target="blank">
                {login}
              </a>
            </li>
          );
        })}
    </ul>
  );
};
