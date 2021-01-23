import React from "react";

function User(props) {
  const { name, avatar, info } = props;
  // console.log(name, avatar, info);
  return (
    <li>
      <span>Name: {name}</span>
      <br />
      <span>Info_about_user: {info}</span>
      <br />
      {/* <img src={avatar} alt={name} /> */}
    </li>
  );
}

export default User;
