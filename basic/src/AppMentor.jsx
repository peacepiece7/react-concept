import React, { useState } from "react";

export default function AppMento() {
  const [person, setPerson] = useState({
    name: "ellie",
    title: "developer",
    mentor: {
      name: "bob",
      title: "senior developer",
    },
  });

  return (
    <div>
      <h1>{`${person.name} is ${person.title}`}</h1>
      <p>{`${person.mentor.title} ${person.mentor.name} is ${person.name}'s mento`}</p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name },
          }));
        }}
      >
        convert mento name
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's tour mentor's title?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title },
          }));
        }}
      >
        convert mento title
      </button>
    </div>
  );
}
