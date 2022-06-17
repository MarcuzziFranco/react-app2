import React from "react";

function Button({ text, style, event }) {
  return (
    <button className={style} onClick={event}>
      {text}
    </button>
  );
}

export default Button;
