import React from "react";

function Queries(props) {
  const { categories, query, description } = props;
  console.log(props);
  return (
    <li>
      <span>Categories: {categories}</span>
      <br />
      <span>Query: {query}</span>
      <br />
      <span>Description: {description}</span>
      <br />
    </li>
  );
}

export default Queries;
