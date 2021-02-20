import React from "react";

export default function FourOhFour() {
  return (
    <div class="code-body">
      <div class="code-area">
        <span style={{ color: "#777", fontStyle: "italic" }}>
          // 404 page not found.
        </span>
        <span>
          <span style={{ color: "#d65562" }}>if</span>(
          <span style={{ color: "#4ca8ef" }}>!</span>
          <span style={{ fontStyle: "italic", color: "#bdbdbd" }}>found</span>)
          {"{"}
        </span>
        <span>
          <span style={{ paddingLeft: 15, color: "#2796ec" }}>
            <i style={{ width: 10, display: "inline-block" }}></i>throw
          </span>
          <span>
            (<span style={{ color: "#a6a61f" }}>"(╯°□°)╯︵ ┻━┻"</span>);
          </span>
          <span style={{ display: "block" }}>{"}"}</span>
          <span style={{ color: "#777", fontStyle: "italic" }}>//</span>
        </span>
        <a href="/" class="btn btn-primary">
          Naar home
        </a>
      </div>
    </div>
  );
}
