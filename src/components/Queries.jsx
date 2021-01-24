import React from "react";
import "./Queries.css";

function Queries(props) {
  const { query, description, link } = props;
  console.log(props);
  return (
    <li>
      <h2>Query: {query}</h2>
      <span>Description: {description}</span>
      <br />
      <span className="italic">
        <a href={link}>{link}</a>
      </span>
      <br />
    </li>
  );
}

export default Queries;
