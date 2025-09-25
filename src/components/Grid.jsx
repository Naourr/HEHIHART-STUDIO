import React from "react";

export default function Grid({ children }) {
  return (
    <div
      className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 [column-fill:_balance]"
      style={{ columnGap: "1.25rem" }} // ~gap-5
    >
      {React.Children.map(children, (child) => (
        <div className="mb-5 break-inside-avoid">{child}</div>
      ))}
    </div>
  );
}
