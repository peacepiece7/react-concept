import React from "react";

export default function Profile({ name, title, isNew, children }) {
  return (
    <div className="profile">
      {isNew && <div className="new">new</div>}
      {children && children}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
