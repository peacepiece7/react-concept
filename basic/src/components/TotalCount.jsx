import { useState } from "react";
import Count from "./Count";

export default function TotalCount() {
  const [totalCnt, setTotalCnt] = useState(0);
  const handleCount = (cnt) => {
    setTotalCnt((prev) => prev + parseInt(cnt));
  };
  return (
    <div>
      <div style={{ fontSize: "40px", textAlign: "center" }}>
        total : {totalCnt} {totalCnt > 10 ? "🔥🔥" : "🌧️🌧️"}
      </div>
      <Count onCnt={handleCount} borderColor="red"></Count>
      <Count onCnt={handleCount} borderColor="blue"></Count>
    </div>
  );
}
