import React from "react";
import { useState, useEffect } from "react";

export default function Count({ onCnt, borderColor }) {
  const [cnt, setCnt] = useState(0);
  const [rate, setRate] = useState(0);
  const increaseTwo = (e) => {
    setRate(2);
    setCnt((prev) => prev + 1);
    setCnt((prev) => prev + 1);
  };
  const increaseOne = () => {
    setRate(1);
    setCnt(cnt + 1);
    setCnt(cnt + 1);
  };
  const resetCount = () => {
    setCnt(0);
    setRate(-cnt);
  };

  useEffect(() => {
    onCnt(rate);
  }, [cnt, setCnt]);

  return (
    <div
      className="count"
      style={{ borderColor: borderColor ? borderColor : "black" }}
    >
      <div>{cnt}</div>
      <div>increaseTwo</div>
      <button onClick={increaseTwo}>plus</button>
      <div> increaseOne</div>
      <button onClick={increaseOne}>plus</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
}
