import React from "react";

function HighlightText({ text }) {
  const firstLetter = text.charAt(0);
  const remainingText = text.slice(1);
  return (
    <div className="p-title">
      <span className="first-word">{firstLetter}</span>
      {remainingText}
    </div>
  );
}

export default HighlightText;
