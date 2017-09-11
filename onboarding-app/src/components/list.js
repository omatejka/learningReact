import React from "react";

export default ({ results }) => {
  return (
    <ul>
      { results.items &&
        results.items.map(({ avatar_url, html_url, login, id }) => {
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
