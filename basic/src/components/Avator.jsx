import React from "react";

export default function Avator({ imageSrc }) {
  return (
    <div className="photo-cover">
      <img className="photo" src={imageSrc} alt="profile avatar"></img>
    </div>
  );
}
